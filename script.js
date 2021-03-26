
function addingEventListener() {

    const input = document.getElementById('Here');
    input.addEventListener('type', function() {
      alert(`welcome ${type}`);
    });
};