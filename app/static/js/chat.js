const httpGet = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      callback(request.responseText);
    } else {
      // We reached our target server, but it returned an error
      console.log('err');
    }
  };

  request.onerror = () => {
    // There was a connection error of some sort
    console.log('err');
  };

  request.send();
}

setInterval(() => {
  httpGet('/msgs', (res) => {
    document.querySelector('#msgs').innerHTML = '';
    const msgs = JSON.parse(res);

    Object.keys(msgs).reverse().forEach(key => {
      document.querySelector('#msgs').innerHTML += `
        <div>
          <h3 style="margin-bottom: 5px">${msgs[key].autor}</h3>
          <p>${msgs[key].msg}</p>
          <hr>
        </div>
      `;
    });
  });
}, 100);