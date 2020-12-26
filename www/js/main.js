function getPopularSeries() {

    $.ajax({ "url": "https://www.episodate.com/api/most-popular", "method": "GET" })
        .done((response) => {
            let series = response.tv_shows;
            let html = '';
            series.forEach((serie) => {
                html += `
                <div class="series-card" onclick="selectPopularSerie('${serie.id}')">
                    <img src="${serie.image_thumbnail_path}">
                    <div class="series-card-inner">
                        <h4>${serie.name}</h4>
                        <h5>${serie.network}</h5>
                        <span>${serie.status}</span>
                    </div>
                </div> 
                `;
            });
            $('#series').html(html);
            $('#pluswrap').hide();
        })
        .catch((err) => {
            console.log(err);
        });
}

function selectPopularSerie(id) {
    sessionStorage.setItem('serieID', id);
    location.href = 'serie-details.html';
    return false;
}

function getPopularSerie() {

    let serieID = sessionStorage.getItem('serieID');

    $.ajax({ "url": "https://www.episodate.com/api/show-details?q=" + serieID, "method": "GET" })
        .done((response) => {
            console.log(response);
            let serie = response.tvShow;
            let html = '';
            html += `
                <img src="${serie.image_thumbnail_path}" class="card-img-top mb-3">
                <div class="col-12">
                    <div class="serie-details">
                        <h4>${serie.name}</h4>
                        <h5>${serie.network}</h5>
                        <span>${serie.status}</span>
                        <p>${serie.description}</p>
                    </div>
                </div>
                `;

            $('#serie').html(html);
            $('#pluswrap').hide();
        })
        .catch((err) => {
            console.log(err);
        });
}