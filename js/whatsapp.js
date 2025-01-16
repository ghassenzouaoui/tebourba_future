
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Construire le message WhatsApp
    const whatsappMessage = `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`;

    // Remplacer par le numéro WhatsApp du destinataire
    const phoneNumber = '21647053148'; // Remplacez par votre propre numéro WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Ouvrir le lien WhatsApp
    window.open(whatsappURL, '_blank');
  });
