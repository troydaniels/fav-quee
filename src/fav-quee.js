/* fav-quee.js - Add marquee text to your favicon.
 * 
 * Troy Daniels 29/05/16
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var interval = 100,  // Step time in milliseconds
    favText = document.getElementById('favicon').getAttribute('data-text'),
    textColour = document.getElementById('favicon').getAttribute('data-col'),
    favSize = offset = 16,  // Size of favicon, and L-R offset position of text
    canvas = document.createElement('canvas'),
    img = document.createElement('img');

canvas.height = canvas.width = favSize;
img.src = document.getElementById('favicon').getAttribute('href');

// And, go...
function startMarquee(){
    var marquee = window.setInterval(updateFavicon, interval);
}

function updateFavicon() {
   if (canvas.getContext) {
      ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.font = 'bold 10px "helvetica", sans-serif';
      ctx.fillStyle = textColour;
      ctx.fillText(favText, offset<=-(favText.toString().length*6)?(offset=favSize):offset--, 12);
      document.getElementById('favicon').setAttribute('href', canvas.toDataURL());
   }
}

function setText(newText){
    favText = newText;
    document.getElementById('favicon').setAttribute('data-text', newText);
}

function setColour(newColour){
    textCol = newColour;
    document.getElementById('favicon').setAttribute('data-col', newColour);
}

//Enough fun
function removeMarquee(){
    clearInterval(marquee);
}
