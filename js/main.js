function loadContent(page) {
    const body = document.body;
    const content = document.getElementById("content");
    const main = document.querySelector(".main_inside");
    const navLinks = document.querySelectorAll(".main_header_nav a");

    // Удаляем все классы страниц
    main.classList.remove("page-home", "page-projects", "page-info", "page-contact");

    // Обновляем выбранный класс на основе страницы
    main.classList.add(`page-${page}`);

    // Сбрасываем текст и удаляем класс selected у всех ссылок навигации
    navLinks.forEach(link => {
        link.textContent = link.getAttribute("data-original-text"); // Восстанавливаем исходный текст
        link.classList.remove("selected"); // Убираем класс selected
    });

    // Обновляем ссылку на текущую страницу
    const currentLink = document.querySelector(`.main_header_nav a[href="javascript:void(0)"][onclick="loadContent('${page}')"]`);
    currentLink.textContent = "●"; // Устанавливаем текст на "●"
    currentLink.classList.add("selected"); // Добавляем класс selected

    // Убираем или добавляем overflow-hidden в зависимости от страницы
    if (page === "projects") {
        body.classList.remove("overflow-hidden");
    } else {
        body.classList.add("overflow-hidden");
    }

    // Добавляем анимацию исчезновения
    content.classList.remove("show");
    requestAnimationFrame(() => {
        content.classList.add("fade");

        // Задержка для смены контента (совпадает с временем в CSS)
        setTimeout(() => {
            // Изменяем содержимое в зависимости от выбранной страницы
            if (page === "home") {
                content.innerHTML = `
                    <p class="home_aboutme">
                        <span>Born in 2006</span>
                        <span>in Dnepr, Ukraine.</span>
                        <span>Graduated with</span>
                        <span>a diploma in</span>
                        <span>Front-End Development</span>
                        <span>Fully motivated for</span>
                        <span>self-development,</span>
                        <span>driven to expand</span>
                        <span>knowledge and develop</span>
                        <span>new competencies.</span>
                        <span>Seeking opportunities</span>
                        <span>to apply skills</span>
                        <span>in a dynamic</span>
                        <span>work environment.</span>
                    </p>
                `;
            } else if (page === "projects") {
                content.innerHTML = `
                    <div class="projects">
                        <div class="projects_container">
                            <p class="project_label">In progress / Female health app</p>
                            <a href="#"><h1 class="project_tittle">Fylo</h1></a>
                        </div>
                    </div>
                    
                    
                `;
            } //else if (page === "info") {
            //     content.innerHTML = `
            //         <div class="info">
            //             <span>Info about Daniel Yakobchuk</span>
            //             <span>Programming Skills: HTML, CSS, JavaScript</span>
            //             <span>Current Goals: Becoming a Full-Stack Developer</span>
            //         </div>
            //     `;
            // }  
            else if (page === "contact") {
                content.innerHTML = `
                    <div class="contact">
                        <a href="https://www.linkedin.com/in/daniel-yakobchuk/">
                            <img src="/images/linkedin.png" alt="LinkedIn" class="icon_ln">
                        </a>
                        <a href="https://github.com/Daniel-Yakobchuk16">
                            <img src="/images/github.png" alt="GitHub" class="icon_ln">
                        </a>
                    </div>
                `;
            }

            // Удаляем класс fade и добавляем класс show для плавного появления
            content.classList.remove("fade");
            content.classList.add("show");
        }, 1000); // Задержка должна совпадать с временем в CSS (1s)
    });
}
