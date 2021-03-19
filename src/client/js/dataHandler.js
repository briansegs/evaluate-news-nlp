const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        console.log('trying...')
        const newData = await response.json();
        return newData
    }catch(error) {
        console.log('error', error);
    }
};

export { postData }