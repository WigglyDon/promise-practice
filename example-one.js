function getServerStatus() {
    const result = fetch('/server/status');

    console.log('The status from the server is: ', result.ok);
}

// fetch() function is async