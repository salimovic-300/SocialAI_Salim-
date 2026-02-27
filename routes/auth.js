const express = require('express');
const router = express.Router();
const { supabase, supabaseAdmin } = require('../supabaseClient');

// ─── REGISTER ────────────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { nom, email, password } = req.body;
    if (!nom || !email || !password)
      return res.status(400).json({ message: '❌ Champs requis' });

    // Admin API : crée l'utilisateur sans envoyer d'email de confirmation
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: email.toLowerCase(),
      password,
      email_confirm: true,        // marque l'email comme confirmé d'office
      user_metadata: { nom },
    });

    if (error)
      return res.status(400).json({ message: '❌ ' + error.message });

    const user = data.user;

    // Connecter immédiatement pour obtenir un token
    const { data: sessionData } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase(),
      password,
    });

    res.status(201).json({
      message: '✅ Compte créé',
      token: sessionData?.session?.access_token ?? null,
      user: {
        id: user.id,
        nom: user.user_metadata?.nom,
        email: user.email,
        plan: 'free',
      },
    });
  } catch (err) {
    res.status(500).json({ message: '❌ Erreur serveur', error: err.message });
  }
});

// ─── LOGIN ───────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: '❌ Champs requis' });

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase(),
      password,
    });

    if (error)
      return res.status(400).json({ message: '❌ Email ou mot de passe incorrect' });

    const user = data.user;
    const token = data.session?.access_token;

    res.json({
      message: '✅ Connecté',
      token,
      user: {
        id: user.id,
        nom: user.user_metadata?.nom,
        email: user.email,
        plan: user.user_metadata?.plan ?? 'free',
      },
    });
  } catch (err) {
    res.status(500).json({ message: '❌ Erreur serveur', error: err.message });
  }
});

// ─── LOGOUT ──────────────────────────────────────────────────
router.post('/logout', async (_req, res) => {
  await supabase.auth.signOut();
  res.json({ message: '✅ Déconnecté' });
});

module.exports = router;
