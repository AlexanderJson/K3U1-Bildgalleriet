export const header = () =>
{
    const head = document.getElementById('main-header');
    const title = document.createElement('h2');
    title.innerText = 'Gallary';
    head.append(title);
    return head;
}