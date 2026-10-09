const previews = document.getElementById('previews');
const tabs = document.getElementById('tabs');

tabs.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedTab = e.target.closest('.tab');
    if(selectedTab){
        const id = selectedTab.dataset.id;
        
        tabs.querySelector('.active')?.classList.remove('active');
        previews.querySelector('.active')?.classList.remove('active');

        selectedTab.classList.add('active');
        previews.querySelector(`[data-id="${id}"]`)?.classList.add('active');

        /*
        // estos no me funcionaron:

        previews.querySelector('.active').classList.remove('active');
        previews.querySelector(`[data-id="${id}"]`).classList('active');
        */
    }
});