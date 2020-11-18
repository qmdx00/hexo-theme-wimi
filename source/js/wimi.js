window.onload = () => {
    // hljs.initHighlightingOnLoad();
    // document.addEventListener('DOMContentLoaded', (event) => {
    //     document.querySelectorAll('.highlight').forEach((block) => {
    //         console.log(block)
    //         hljs.highlightBlock(block);
    //     });
    // });
    hljs.configure({useBR: true});
    document.querySelectorAll('.code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}