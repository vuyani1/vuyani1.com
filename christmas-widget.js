// Create a container for the widget
const widgetContainer = document.createElement('div');
widgetContainer.id = 'christmas-widget';
widgetContainer.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url('https://vuyani1.github.io/christmas_bg.jpg') no-repeat center center / cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-family: 'Arial', sans-serif;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

// Add widget content
widgetContainer.innerHTML = `
    <div>
        <strong style="font-size: 1.5rem;">🎄 VGAMES by Vuyani Vilakazi 🎮</strong>
        <p style="margin: 5px 0;">Christmas updated theme & Christmas games are coming! 🎅</p>
        <p style="margin: 5px 0;">✨ New games launching January or February 2025! 🎉</p>
    </div>
    <button id="close-widget" style="
        background: white;
        color: red;
        border: none;
        padding: 5px 15px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    ">✖</button>
`;

// Add the widget to the top of the body
document.body.style.marginTop = '100px';
document.body.prepend(widgetContainer);

// Handle closing the widget
document.getElementById('close-widget').addEventListener('click', () => {
    widgetContainer.remove();
    document.body.style.marginTop = '0';
});
