// 定义映射数据
const dataMapping = {
    "/fka/awesome-chatgpt-prompts": "data/443955465148174336",
    "/mozilla-foundation/common_voice_17_0": "data/443957694408167424",
    "/databricks/databricks-dolly-15k": "data/443959389833924608",
    "/HuggingFaceFW/fineweb": "data/443961342076915712",
    "/lavita/medical-qa-shared-task-v1-toy": "data/443963889479061504",
    "/lighteval/mmlu": "data/443967172553740288",
    "/hails/mmlu_no_train": "data/443969495120220160",
    "/teknium/OpenHermes-2.5": "data/443976360604471296",
    "/Open-Orca/OpenOrca": "data/443980697217011712",
    "/HuggingFaceH4/ultrachat_200k": "data/443982696868220928"
};
// 根据URL判断并设置图片的src属性
function defaultFunction() {
    console.log("defaultFunction")
}
function top_banner(path) {
    console.log("top_banner")
    // 获取具有指定class的header元素
    var header = document.querySelector('.border-b.border-gray-100');

    // 创建一个新的图片元素
    var img = document.createElement('img');
    img.classList.add('inner-img');
    // 可选：图片居中
    // img.style.margin = 'auto';


    if (path.includes('models')) {
        img.src = '/img/Models Banner.jpg';
    } else if (path.includes('datasets')) {
        img.src = '/img/Datasets页面Banner.jpg';
    } else if (path.includes('spaces')) {
        header = document.querySelector("body > div > main > div.container.py-6.lg\\:pb-7.lg\\:pt-10")
        img.src = '/img/Spaces_Banner.jpg';
        img.style.marginTop = '10px'
    }

    // 如果src属性被设置，则将图片插入到header中
    if (img.src) {
        header.appendChild(img);
    }
}



function depoly_button(parentDiv_path, img_src, tip_img_src, order, lines, match_id, match_img_src,homePath,loginPath) {

    console.log("depoly_button") // 获取具有特定class的父div


    var parentDiv = document.querySelector(parentDiv_path)    // 创建一个新的图片元素
    console.log(parentDiv);
    var image_hover = document.createElement('div');
    image_hover.classList.add('image-hover');
    image_hover.style.order = order;
    var img = document.createElement('img');
    img.src = img_src;
    img.classList.add('bushuqudongyun');
    image_hover.appendChild(img);

    var tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    var img_tip = document.createElement('img');
    img_tip.src = tip_img_src;
    img_tip.classList.add('tooltip-image');
    tooltip.appendChild(img_tip);
    image_hover.appendChild(tooltip)
    var text_container = document.createElement('div');
    text_container.classList.add('text-container');
    tooltip.appendChild(text_container);
    parentDiv.appendChild(image_hover);
    if (match_id!='-1') {
        img.src = match_img_src;
        img.onclick = function () {
        redirectToSpecificPage(match_id);
    };
        return;
    }
    qudongyun_popup_bushu(lines);
    img.onclick = function () {
        redirectToQudongyunByRule(homePath,loginPath);
    };
}

//定位到具体页面
function redirectToSpecificPage(projectId){
  window.location.href = "https://open.virtaicloud.com/web/"+projectId;
}


function depoly_button_space(parentDiv_path, img_src, tip_img_src, order, lines) {
    console.log("depoly_button") // 获取具有特定class的父div

    var parentDiv = document.querySelector(parentDiv_path)    // 创建一个新的图片元素
    console.log(parentDiv);
    var image_hover = document.createElement('div');
    image_hover.classList.add('image-hover');
    image_hover.style.order = order;
    var img = document.createElement('img');
    img.src = img_src;
    img.classList.add('bushuqudongyun');
    image_hover.appendChild(img);

    var tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.id = "tooltip-space";
    var img_tip = document.createElement('img');
    img_tip.src = tip_img_src;
    img_tip.classList.add('tooltip-image');
    tooltip.appendChild(img_tip);
    image_hover.appendChild(tooltip)
    var text_container = document.createElement('div');
    text_container.classList.add('text-container');
    text_container.id = "text-container-space";
    tooltip.appendChild(text_container);
    parentDiv.appendChild(image_hover);
    qudongyun_popup_bushu(lines);

}

function beside_banner(section_path, first_child_path,homePath,loginPath,dataParam) {
    section = document.querySelector(section_path);


    var img = document.createElement('img');
    img.src = "/img/Models详情页-广告位图.png";

    img.style.marginBottom = "10px"

    // Creating a container for the buttons
    var container = document.createElement('div');
    container.className = 'beside-banner-button-wrapper';

    // Creating the '查看定价' button
    var button1 = document.createElement('button');
    button1.id = 'chakandingjia';
    button1.className = 'chakandingjia_class';
    button1.textContent = '查看定价';
    button1.setAttribute('data-param', dataParam);
    // Creating the '体验一下' button
    var button2 = document.createElement('button');
    button2.id = 'tiyanyixia';
    button2.textContent = '体验一下';
    button2.onclick = function () {
        redirectToQudongyunByRule(homePath,loginPath);
    };

    // Appending buttons to the container
    container.appendChild(button1);
    container.appendChild(button2);




    // 获取容器并将 img 和 map 元素添加到 DOM 中
    var all_container = document.createElement('div');
    all_container.appendChild(img);
    all_container.appendChild(container);
    all_container.className = 'beside-banner-container'

    child = document.querySelector(first_child_path);

    section.insertBefore(all_container, child);
}

function modal() {
    // Create the outermost div for the modal
    var modal = document.createElement('div');
    modal.className = 'modal';

    // Create the container div inside the modal
    var container = document.createElement('div');
    container.className = 'container';

    // Create the iframe inside the container
    var iframe = document.createElement('iframe');
    iframe.src = '';
    iframe.id='pricingIframe';

    // Create the close div inside the container
    var close = document.createElement('div');
    close.className = 'close';

    // Appending the iframe and close button to the container
    container.appendChild(iframe);
    container.appendChild(close);

    // Append the container to the modal
    modal.appendChild(container);

    // Finally, append the modal to the body of the document
    document.body.appendChild(modal);
}



function chooseFunctionBasedOnPath() {
    const path = window.location.pathname; // Get the current path
    console.log(path)
    const regex = /^\/[^\/]+\/[^\/]+$/
    // Regular expression to match specific paths
    if (path.match(/^\/(models|datasets|spaces)$/)) {
        top_banner(path);
    } else if (path.match(regex)) { // Matches 'a/b' format
        var section_path = "body > div > main > div.container.relative.flex.flex-col.md\\:grid.md\\:space-y-0.w-full.md\\:grid-cols-12.md\\:flex-1.md\\:grid-rows-full.space-y-4.md\\:gap-6 > section.pt-8.border-gray-100.md\\:col-span-5.pt-6.md\\:pb-24.md\\:pl-6.md\\:border-l.order-first.md\\:order-none"

        var first_child_path = "body > div > main > div.container.relative.flex.flex-col.md\\:grid.md\\:space-y-0.w-full.md\\:grid-cols-12.md\\:flex-1.md\\:grid-rows-full.space-y-4.md\\:gap-6 > section.pt-8.border-gray-100.md\\:col-span-5.pt-6.md\\:pb-24.md\\:pl-6.md\\:border-l.order-first.md\\:order-none > div.flex.justify-between.pb-2"

        var parentDiv_path = "body > div > main > div.SVELTE_HYDRATER.contents > header > div > div.flex.flex-col-reverse.lg\\:flex-row.lg\\:items-center.lg\\:justify-between > div.relative.mb-1\\.5.flex.flex-wrap.gap-1\\.5.sm\\:flex-nowrap.lg\\:mb-0";
        var img_src = '/img/Models详情页-前往趋动云部署下载图标.png';
        var tip_img_src = '/img/Model详情页-使用方法弹窗-blank.png';
        var lines = [
            { text: '使用方法:', color: 'white' },
            { text: '1.模型下载', color: 'rgb(51, 102, 244)' },
            { text: 'a.登录趋动云，创建项目', color: 'white' },
            { text: 'b.创建开发环境进行模型下载', color: 'white' },
            { text: '2.部署', color: 'rgb(51, 102, 244)' },
            { text: 'a.下载模型', color: 'white' },
            { text: 'b.登录趋动云，挂载模型至项目即刻体验云端部署和优化', color: 'white' },
        ];
        match_id = check_match_id(path, 'model');
        depoly_button(parentDiv_path, img_src, tip_img_src, -10000, lines, match_id, match_img_src,'NF','SF');
        beside_banner(section_path, first_child_path,'VF','4F','8F');
        modal();

    } else if (path.match(/^\/datasets\/[^\/]+\/[^\/]+$/)) { // Matches 'a/b' format

        var section_path = "body > div > main > div.container.relative.flex.flex-col.md\\:grid.md\\:space-y-0.w-full.md\\:grid-cols-12.md\\:flex-1.md\\:grid-rows-full.space-y-4.md\\:gap-6 > section.pt-6.border-gray-100.md\\:pb-24.md\\:pl-6.md\\:w-64.lg\\:w-80.xl\\:w-96.flex-none.order-first.md\\:order-none.md\\:border-l.\\!pt-3.md\\:\\!pt-6"
        var first_child_path = "body > div > main > div.container.relative.flex.flex-col.md\\:grid.md\\:space-y-0.w-full.md\\:grid-cols-12.md\\:flex-1.md\\:grid-rows-full.space-y-4.md\\:gap-6 > section.pt-6.border-gray-100.md\\:pb-24.md\\:pl-6.md\\:w-64.lg\\:w-80.xl\\:w-96.flex-none.order-first.md\\:order-none.md\\:border-l.\\!pt-3.md\\:\\!pt-6 > dl"
        var parentDiv = "body > div.flex.min-h-screen.flex-col > main > div.SVELTE_HYDRATER.contents > header > div > div.flex.flex-col-reverse.lg\\:flex-row.lg\\:items-center.lg\\:justify-between";
        var img_src = '/img/Models详情页-前往趋动云部署下载图标.png'; var tip_img_src = '/img/Model详情页-使用方法弹窗-blank.png';
        var lines = [{ text: '使用方法:', color: 'white' }, { text: '1.数据集下载', color: 'rgb(51, 102, 244)' }, { text: 'a.登录趋动云，创建项目', color: 'white' }, { text: 'b.创建开发环境进行数据集下载', color: 'white' }, { text: '2.运行', color: 'rgb(51, 102, 244)' }, { text: 'a.下载数据集', color: 'white' }, { text: 'b.登录趋动云，挂载数据集至项目即刻体验云端部署和优化', color: 'white' },
        ];
        var match_img_src = '/img/Dataset详情页-一键训练至趋动云.png';
        match_id = check_match_id(path, 'datasets');
        depoly_button(parentDiv, img_src, tip_img_src, 0, lines, match_id, match_img_src,'uF','gF');
        beside_banner(section_path, first_child_path,'mF','PF','fF');
        modal();
    } else if (path.match(/^\/spaces\/[^\/]+\/[^\/]+$/)) { // Matches 'a/b' format
        console.log("spaces")
        var parentDiv = "body > div > div:nth-child(1) > header > div > div.flex.items-center.justify-between.xl\\:min-w-0";
        var img_src = '/img/前往趋动云部署.png';
        var tip_img_src = '/img/Space详情页-使用方法弹窗-blank.png';
        var lines = [{ text: '使用方法:', color: 'white' }, { text: '1.部署', color: 'rgb(51, 102, 244)' }, { text: 'a.下载space', color: 'white' }, { text: 'b.登录趋动云，挂载space至项目即刻体验云端部署和优化', color: 'white' }
        ];
        match_id = check_match_id(path, 'spaces');
        depoly_button_space(parentDiv, img_src, tip_img_src, 0, lines, match_id, match_img_src,'JF','eF');

    } else {
        defaultFunction();
    }
}
// Execute the function chooser when the page loads
document.addEventListener("DOMContentLoaded", chooseFunctionBasedOnPath);



//趋动云价格弹框
document.addEventListener("DOMContentLoaded", function () {
    const chakandingjia = document.getElementsByClassName('chakandingjia_class');
    Array.from(chakandingjia).forEach(element => {
        element.addEventListener('click', function () {
            const modal = document.getElementsByClassName('modal')[0];
            const iframe = document.getElementById('pricingIframe');
            const param = element.getAttribute('data-param');
            iframe.src = `/pricing.html?index=${param}`;
            modal.style.display = "block";
        });
    });

    const closeButton = document.querySelector('.modal .close'); // Correctly select the close button
    if (closeButton == null) {
        return;
    }
    closeButton.addEventListener('click', function () {
        const modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'none'; // Hide the modal
    });

    // Existing hover effect script, assuming you have an element with the class 'hover-area'
    const hoverArea = document.querySelector('.hover-area');
    const lightDot = document.querySelector('.light-dot');

    if (hoverArea && lightDot) {
        hoverArea.addEventListener('mousemove', function (e) {
            lightDot.style.opacity = 1;
            lightDot.style.top = `${e.clientY - 10}px`;
            lightDot.style.left = `${e.clientX - 10}px`;
        });

        hoverArea.addEventListener('mouseleave', function () {
            lightDot.style.opacity = 0;
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector('.modal'); // Get the modal
    if (modal == null) {
        return;
    }
    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }
    // Event listener for modal click
    modal.addEventListener('click', function (event) {
        if (event.target === modal) { // Check if the click was on the modal but not on the container
            closeModal();
        }
    });

});






//部署趋动云弹框说明
function qudongyun_popup_bushu(lines, match_id, not_match_img_src) {

    var image = document.querySelector('.bushuqudongyun');
    var tooltip = document.querySelector('.tooltip');
    if (match_id) {
        image.src = not_match_img_src;
        return;
    }
    // 显示tooltip
    image.addEventListener('mouseover', function () {
        tooltip.style.display = 'block';
    });

    // 隐藏tooltip
    image.addEventListener('mouseout', function () {
        tooltip.style.display = 'none';
    });
    addText(lines);
}


function addText(lines) {
    var container = document.querySelector('.text-container');

    lines.forEach(function (line) {
        var textDiv = document.createElement('div');
        textDiv.className = 'text';
        textDiv.textContent = line.text;
        textDiv.style.color = line.color;
        textDiv.style.backgroundColor = line.bgColor;
        container.appendChild(textDiv);
    });
}


//判断是否是趋动云所有的数据集id
function check_match_id(path, type) {
    if (type == 'datasets') {


        // 检查输入字符串是否在映射中
        // if (dataMapping[inputString]) {
        //     // 如果存在，构造 URL 并进行跳转
        //     const url = `https://open.virtaicloud.com/web/data/${dataMapping[inputString]}`;
        //     window.location.href = url; // 在浏览器中使用此行进行跳转
        //     console.log(`Redirecting to ${url}`); // 在控制台打印跳转的 URL，便于调试
        // } else {
        //     console.log("Input string does not match any data entry.");
        // }
        // 假设路径以 '/datasets' 开头，我们移除这个部分以匹配 dataMapping 中的键
        const strippedPath = path.startsWith('/datasets') ? path.substring('/datasets'.length) : path;

        // 检查处理后的路径是否以 dataMapping 中的任何键结尾
        for (const key in dataMapping) {
            if (strippedPath.endsWith(key)) {
                console.log("Match found for input path.");
                return dataMapping[key];
            }
        }
        console.log("Input path does not match any data entry.");
        return '-1';
    }
    return '-1';
}
