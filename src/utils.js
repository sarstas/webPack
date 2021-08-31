export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export const toggleWindow = (hideEl, visibleEl) => {
    hideEl.classList.add("visibility");
    visibleEl.classList.remove("visibility");
}

