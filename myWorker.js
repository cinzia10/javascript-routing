
self.addEventListener('message', messageRecived);

function messageRecived(message){
    console.log(message.data);
    postMessage('ecco', message.data)
}