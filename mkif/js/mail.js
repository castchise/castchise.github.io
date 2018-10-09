document.getElementById('send-data-modal').addEventListener('click', gatherData); 
document.getElementById('send-data-footer').addEventListener('click', gatherData); 

function gatherData(e) {
  if (this.parentElement.tagName === 'FORM') {
    data = document.getElementById('pre-footer').getElementsByTagName('input');
  } else {
    data = document.getElementById('contactModal').getElementsByTagName('input');
  }

  let name = data[0].value;
  let phone = data[1].value;
  let email = data[2].value;

  console.log(`Username: ${name}, Userphone: ${phone}, Usermail: ${email}`);

  dataSend(name, phone, email);

  e.preventDefault();
}

function popup(block) {
  document.querySelector(block).style.display = 'block';
}

function clearance(block) {
  setTimeout(() => {document.querySelector(block).style.display = 'none'; }, 3000);
}

function dataSend(name, phone, email) {
  if (name === '' || phone === '' || email === '') {
    popup('.footer-email-send-fail');
    popup('.email-send-fail');
    clearance('.footer-email-send-fail');
    clearance('.email-send-fail');
  } else {
    Email.send("YOUREMAILRIGHTHERE@EMAIL.COM",
      "SENDERMAIL@EMAIL.COM",
      "Получен новый заказ по кровле/сайдингу!",
      `
        <h1>Получен заказ от ${name}!</h1>
        <br>
        Указанные клиентом контактные данные:
        <br>
        Телефон: <span style="font-weight: bold;">${phone}</span>
        <br>
        E-Mail: <span style="font-weight: bold;">${email}</span>
      `,
      "smtp.elasticemail.com",
      "username",
      "pw");

    data[0].value = '';
    data[1].value = '';
    data[2].value = '';

    popup('.footer-email-send-succ');
    popup('.email-send-succ');
    clearance('.footer-email-send-succ');
    clearance('.email-send-succ');
  }
}