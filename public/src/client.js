document.getElementById('videoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const videoFile = document.getElementById('videoUpload').files[0];
    const formData = new FormData();
    formData.append('video', videoFile);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    document.getElementById('result').innerText = result.message;
});
