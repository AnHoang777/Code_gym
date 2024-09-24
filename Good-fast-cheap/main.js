
        let buttongood = true;
        let buttonfast = true;
        let buttoncheap = true;
        function goodColor(button) {
            const cheapButton = document.querySelector('.cheap'); // Tìm nút "Cheap"
            if (buttongood){
            button.style.backgroundColor = "yellow"; // Đổi màu nền thành vàng
            button.style.color = "black"; // Đổi màu chữ thành đen
            cheapButton.style.backgroundColor = "lightgreen"; // Đổi màu nền thành vàng
            }
            else{
                button.style.backgroundColor = "lightgreen"; // Đổi màu nền thành vàng
                button.style.color = "white"; // Đổi màu chữ thành đen
                cheapButton.style.backgroundColor = "rgb(15, 45, 218)";
                cheapButton.style.Color = "black";
            }
            buttongood =!buttongood;
        }
        function fastColor(button) {
            const goodButton = document.querySelector('.good'); // Tìm nút "Cheap"
            if (buttonfast){
            button.style.backgroundColor = "yellow"; // Đổi màu nền thành vàng
            button.style.color = "black"; // Đổi màu chữ thành đen
            goodButton.style.backgroundColor = "#A52A2A"; // Đổi màu nền thành vàng
            }
            else{
                button.style.backgroundColor = "lightgreen"; // Đổi màu nền thành vàng
                button.style.color = "white"; // Đổi màu chữ thành đen
                goodButton.style.backgroundColor = "yellow"; // Đổi màu nền thành vàng
                goodButton.style.color = "black"; // Đổi màu chữ thành đen
            }
            buttonfast =!buttonfast;
        }
        function cheapColor(button) {
            const fastButton = document.querySelector('.fast'); // Tìm nút "Cheap"
            if (buttoncheap){
            button.style.backgroundColor = "#FFA500"; // Đổi màu nền thành vàng
            button.style.color = "black"; // Đổi màu chữ thành đen
            fastButton.style.backgroundColor = "black"; // Đổi màu nền thành vàng
            }
            else{
                button.style.backgroundColor = "blue"; // Đổi màu nền thành vàng
                button.style.color = "black"; // Đổi màu chữ thành đen
                fastButton.style.backgroundColor = "#FFC0CB";
            }
            buttoncheap =!buttoncheap;
        }