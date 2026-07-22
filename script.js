// Remplace par l'URL de ton backend hébergé (ex: Render ou Railway)
const API_URL = "https://ton-backend-api.onrender.com";

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const payload = {
    name: document.getElementById('regName').value,
    phone: document.getElementById('regPhone').value,
    password: document.getElementById('regPassword').value,
    refCode: document.getElementById('regRefCode').value || null
  };

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    const data = await res.json();
    if (res.ok) {
      alert(`Inscription réussie ! Votre code de parrainage est : ${data.referralCode}`);
      // Basculer vers l'affichage du tableau de bord
      document.getElementById('registerSection').classList.add('hidden');
      document.getElementById('dashboardSection').classList.remove('hidden');
    } else {
      alert(data.message || "Erreur lors de l'inscription");
    }
  } catch (err) {
    alert("Impossible de contacter le serveur backend.");
  }
});
