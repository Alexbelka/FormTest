(function() {
    let introvert = document.querySelector('.form__input--introvert');
    let extrovert = document.querySelector('.form__input--extrovert');
    let neverMind = document.querySelector('.form__input--neverMind');
    let result = document.querySelector('.form__result');
    let peopleAmount = document.querySelector('.peopleAmount');
    let collection = document.querySelectorAll('.form__input');
    let extroBlock = document.querySelector('.block__extro');
    let introBlock = document.querySelector('.block__intro');
    let neverBlock = document.querySelector('.block__never');
    let introPercent = document.querySelector('.block__intro--percent');
    let extroPercent = document.querySelector('.block__extro--percent');
    let neverPercent = document.querySelector('.block__never--percent');
    let introverts = [];
    let extroverts = [];
    let neverMinds = [];
    let mainArray = [];
    let Counter = 0;



    for (let i = 0; i < collection.length; i++) {

        collection[i].addEventListener('change', function () {
            result.removeAttribute('disabled', 'disabled')
        })

    }


    introvert.addEventListener('change', function () {
        let x = Counter++;
        introverts.push(x);
        return introverts;
    })

    extrovert.addEventListener('change', function () {
        let y = Counter++;
        extroverts.push(y);
        return extroverts
    })

    neverMind.addEventListener('change', function () {
        let z = Counter++;
        neverMinds.push(z);
        return neverMinds
    });


    result.addEventListener('click', function (e) {

        e.preventDefault();

        let mainArray = introverts.concat(extroverts, neverMinds);

        let introvertWidth = (introverts.length / mainArray.length * 100).toFixed(1) + '%';

        let extrovertWidth = (extroverts.length / mainArray.length * 100).toFixed(1) + '%';

        let neverMindsWidth = (neverMinds.length / mainArray.length * 100).toFixed(1) + '%';

        let amountMain = mainArray.length;

        let MainText = document.createElement('p');

        MainText.innerHTML = amountMain;

        let amountIntrovert = introverts.length;

        let amountExtrovert = extrovert.length;

        let amountNever = neverMinds.length;

        console.log(introvertWidth, extrovertWidth, neverMindsWidth);

        peopleAmount.appendChild(MainText);


        if (introvertWidth !== "NaN%") {

            introBlock.classList.add('block__intro--width');

            let bl = document.querySelector('.block__intro--width');

            bl.style.width = introvertWidth;

        }

        if (extrovertWidth !== 'NaN%') {
            extroBlock.style.width = extrovertWidth;
        }

        if (neverMindsWidth !== 'NaN%') {
            neverBlock.style.width = neverMindsWidth;
        }

        introPercent.innerHTML = introvertWidth;

        extroPercent.innerHTML = extrovertWidth;

        neverPercent.innerHTML = neverMindsWidth;


        if (introvertWidth === '0.0%' || introvertWidth === 'NaN%') {

            introPercent.style.display = 'none';

        }

        if (extrovertWidth === '0.0%' || extrovertWidth === 'NaN%') {

            extroPercent.style.display = 'none';
        }


        if (neverMindsWidth === '0.0%' || neverMindsWidth === 'NaN%') {
            neverPercent.style.display = 'none';
        }


        for (let i = 0; i < collection.length; i++) {

            collection[i].style.display = 'none';

        }

    })

}());