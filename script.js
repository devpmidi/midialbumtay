var customCovers = [
  "https://lastfm.freetls.fastly.net/i/u/770x0/caa5a586b599869e10542593928b5fdf.jpg#caa5a586b599869e10542593928b5fdf",
  "https://lastfm.freetls.fastly.net/i/u/770x0/f58d29605321bc6e1ee4da6ae5a0cb4a.jpg#f58d29605321bc6e1ee4da6ae5a0cb4a",
  "https://lastfm.freetls.fastly.net/i/u/770x0/b0962b3df3e930c581bc69618d6c3281.jpg#b0962b3df3e930c581bc69618d6c3281",
  "https://lastfm.freetls.fastly.net/i/u/770x0/dddb96a470fecc69d281f45c81a44d2a.jpg#dddb96a470fecc69d281f45c81a44d2a",
  "https://lastfm.freetls.fastly.net/i/u/770x0/1aaa3638ee0bfee0ba8089c78ad63b26.jpg#1aaa3638ee0bfee0ba8089c78ad63b26",
  "https://lastfm.freetls.fastly.net/i/u/770x0/d3f083370c371a3ba1cddafaf193c27d.jpg#d3f083370c371a3ba1cddafaf193c27d",
  "https://lastfm.freetls.fastly.net/i/u/770x0/bd60a56598a54a56b833e082e55326ae.jpg#bd60a56598a54a56b833e082e55326ae",
  "https://lastfm.freetls.fastly.net/i/u/770x0/b8da93ab6d8aa00384998fdae7451d92.jpg#b8da93ab6d8aa00384998fdae7451d92",
  "https://lastfm.freetls.fastly.net/i/u/770x0/8914bab2a0e4e454c6892f151d57208f.jpg#8914bab2a0e4e454c6892f151d57208f",
  "https://lastfm.freetls.fastly.net/i/u/770x0/3fc71aa25ab1242571c841c75f764d10.jpg#3fc71aa25ab1242571c841c75f764d10"
];

var albumTitles = [
  "SPEAK NOW TV",
  "1989 TV",
  "RED TV",
  "REPUTATION",
  "FEARLESS TV",
  "LOVER",
  "DEBUT",
  "FOLKLORE",
  "MIDNIGHTS",
  "EVERMORE"
];

var albumLinks = [
  "https://open.spotify.com/album/5AEDGbliTTfjOB8TSm1sxt?si=lTGD2N0VQmuui4RQ1rVUzw",
  "https://open.spotify.com/album/64LU4c1nfjz1t4VnGhagcg?si=ZBW3cd5XQRWGqKN5oOIyTg",
  "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9?si=9pRkhZMqSQmnaiKNHdTolA",
  "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=tocP-W0tRkuYivCvMKfpuw",
  "https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH?si=VwITy6qcSWOHwnnNokJhTQ",
  "https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq?si=0wg-nU7VT42g57ZF5K96sw",
  "https://open.spotify.com/album/5eyZZoQEFQWRHkV2xgAeBw?si=MHQ-RDuYSoe7yntt9e8xeg",
  "https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?si=IodTLPQSRZaPa3jvGNXh9g",
  "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=cGfvB8DGTD-ofEgerEKWQg",
  "https://open.spotify.com/album/2Xoteh7uEpea4TohMxjtaq?si=69XNd1rCQWKIMAFapSZVZw"
];

function generateAlbum() {
  // Obtenha a cor do título
  var titleColor = getRandomColor();

  // Atualize o título com a nova cor
  document.getElementById('title').style.color = titleColor;

  // Obtenha uma capa de álbum personalizada aleatória
  var customAlbumCover = document.getElementById('customAlbumCover');
  var randomIndex = Math.floor(Math.random() * customCovers.length);
  customAlbumCover.style.backgroundImage = 'url(' + customCovers[randomIndex] + ')';
  customAlbumCover.style.backgroundColor = 'transparent';

  // Obtenha o título e link correspondentes ao índice gerado aleatoriamente
  var albumTitle = albumTitles[randomIndex];
  var albumLink = albumLinks[randomIndex];
  
  // Atualize o título com o novo título do álbum
  document.getElementById('title').innerText = albumTitle;

  // Crie um botão com o link do álbum
  var albumButton = document.createElement('a');
  albumButton.href = albumLink;
  albumButton.target = "_blank";
  albumButton.id = "openSpotifyBtn"; // Adicionando um ID para aplicar estilos específicos
  albumButton.innerText = "Abrir no Spotify";

  // Substitua o conteúdo do elemento com id 'albumLink' pelo botão
  var albumLinkElement = document.getElementById('albumLink');
  albumLinkElement.innerHTML = '';
  albumLinkElement.appendChild(albumButton);

  // Se um título personalizado foi fornecido, use-o
  var customTitle = document.getElementById('customTitle').value;
  if (customTitle) {
    document.getElementById('title').innerText = customTitle;
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function previewImage() {
  var input = document.getElementById('imageInput');
  var customAlbumCover = document.getElementById('customAlbumCover');
  
  if (input.files && input.files[0]) {
      var imageUrl = URL.createObjectURL(input.files[0]);
      customAlbumCover.style.backgroundImage = 'url(' + imageUrl + ')';
      customAlbumCover.style.backgroundColor = 'transparent';
  }
}
