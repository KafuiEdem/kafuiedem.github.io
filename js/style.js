   // JavaScript for pagination and project toggling
   const projects = document.querySelectorAll('.project');
   const pagination = document.getElementById('pagination');
   
   let currentPage = 1;
   const projectsPerPage = 6; // Adjust this number as needed

   // Function to hide all projects
   function hideProjects() {
       projects.forEach(project => {
           project.style.display = 'none';
       });
   }

   // Function to show projects for the current page
   function showProjectsForPage(page) {
       const startIndex = (page - 1) * projectsPerPage;
       const endIndex = startIndex + projectsPerPage;
       for (let i = startIndex; i < endIndex && i < projects.length; i++) {
           projects[i].style.display = 'block';
       }
   }


    function generatePagination() {
            pagination.innerHTML = '';
            const totalPages = Math.ceil(projects.length / projectsPerPage);
            for (let i = 1; i <= totalPages; i++) {
                const pageNumber = document.createElement('span');
                pageNumber.classList.add('page-number');
                pageNumber.textContent = i;
                pageNumber.addEventListener('click', () => {
                    currentPage = i;
                    hideProjects();
                    showProjectsForPage(currentPage);
                });
                pagination.appendChild(pageNumber);
            }
        }

   // Function to generate numeric pagination
   function generatePagination() {
       pagination.innerHTML = '';
       const totalPages = Math.ceil(projects.length / projectsPerPage);
       for (let i = 1; i <= totalPages; i++) {
           const pageNumber = document.createElement('span');
           pageNumber.classList.add('page-number');
           pageNumber.textContent = i;
           pageNumber.addEventListener('click', () => {
               currentPage = i;
               hideProjects();
               showProjectsForPage(currentPage);
           });
           pagination.appendChild(pageNumber);
       }
   }

    // Function to toggle project descriptions
    function toggleProjectDescription(project) {
        const description = project.querySelector('p');
        description.style.display = (description.style.display === 'none' || !description.style.display) ? 'block' : 'none';
    }

     // Add click event listeners to each project
     projects.forEach(project => {
        project.addEventListener('click', () => {
            toggleProjectDescription(project);
        });
    });

   // Initial setup
   hideProjects();
   showProjectsForPage(currentPage);
   generatePagination();