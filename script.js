// File upload functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    
    // Handle drag and drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = '#4361ee';
        dropZone.style.backgroundColor = 'rgba(67, 97, 238, 0.05)';
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.style.borderColor = '#e9ecef';
        dropZone.style.backgroundColor = 'transparent';
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = '#e9ecef';
        dropZone.style.backgroundColor = 'transparent';
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateFileList();
        }
    });
    
    // Handle click and file selection
    dropZone.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', updateFileList);
    
    function updateFileList() {
        if (fileInput.files.length > 0) {
            const fileList = Array.from(fileInput.files)
                .map(file => file.name)
                .join(', ');
            
            dropZone.innerHTML = `
                <i class="fas fa-check-circle" style="color: #4cc9f0;"></i>
                <p>${fileInput.files.length} file(s) selected</p>
                <small>${fileList}</small>
            `;
        }
    }
    
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Here you would typically filter the dashboard cards
            // based on the selected tab (active/in-progress/completed)
            // This would require more advanced JavaScript or backend integration
        });
    });
    
    // User dropdown functionality
    const userMenu = document.querySelector('.user-menu');
    
    userMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = userMenu.querySelector('.dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', () => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
});

// After successful login check:
if (!localStorage.getItem('userRole')) {
    window.location.href = 'role-selection.html';
} else {
    // Redirect to appropriate dashboard
}