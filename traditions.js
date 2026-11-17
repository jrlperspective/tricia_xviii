const traditions = [
['18 Gifts','gifts',`John Paul Flora|Arhon Pagaling|Daniel Fernandez|John Andrew Salviejo|Lyrenz Desierto|Jessa Mae Evangelista|Justin Santos|Jasmin Santos|Erika Ramos|Akisha Parinas|Jewel Tamayo|Kryssha Joaquin|Krysnha Joaquin|Carmilynne Pahayay|Alquizha Paraso|Pia Tolentino|Krisha Grande|Ashley Lopez`],
['18 Balloons','balloons',`Zayn Kendrick De Guzman|Jaymark Odsinada|Jessa Mae Odsinada|Nathan Obiena|Marc Sean Orani|Geddie Reposar|Rowelyn Lopez|Ellie raine Valdez|Amarah Iglesia|Loreto Julliano|Kiana Daquigan|Zoey Picana|Akiehero De Guzman|Ayesha De Guzman|Donna May Rubang|Bhemhie Iglesias|Janos Andie Mallari|James Sacasan`],
['Blue Bills','blue-bills',`Marilou Castro|Jessie Dela Cruz|Vilma De Guzman|Maximo De Guzman|Manuel De Guzman|Rudy De Guzman|Alfin Borromeo|Victoria Gagarin|Jullieta Dela Cruz|Rowena Pili|Tristar Romin|Carlos Romin|Alexis Reposar|Mary Jane Reposar|Mary Ann Apuli|Lab Medina|Princess Bautista|Rose Gregorio`],
['18 Treasures','treasures',`Lyka Rombaoa|Lorene Orzame|Angel Idmilao|Alliana Balaba|Editha paginag|Maan Abcede|Alexa Magno|Nataly Pasana|Nicole Dela Cruz|Aubrey Gamboa|Samantha Orijudos|Princess Olonan|Lance Velasco|Rhianne Pascual|Mikaela Lua|Edrelyn Bala|Althea Gregorio|Jemmalyn Cinense`],
['18 Candles','candles',`Fe De Guzman|Stephanie Castro|Jhesmine Dela Cruz|Crissa Borromeo|Trizia Jade Borromeo|Marilyn De Guzman|Mae Rachelle De Guzman|Pauline Aggasid|Cristina Valdez|Marjorie Dullas|Joana Melegrito|Ronalyn Almazan|Rosa Mallari|Stephanie Iglesias|Kristel Mae Peralta|Trisha Peralta|Trisha Mae Magba|Mirian Agustin`],
['18 Purple Things','purple-things',`Rose Nieka Panzuelo|Audrey Galope|Bianca Tabago|Blessy Baltazar|Ashley Dugay|Diana Garces|Jan Vincent Gagarin|Princess Daine Lapid|John Ivan Gamis|Shakira Reposar|Ryza Carpio|Ellisa Joyce Estabillo|Eiyesha Joyze Estabillo|Lie Ann Iglesia|Jasmin Melegrito|Robejen Ugay|Rose Ann Mallari|Diana Obligado`],
['18 Envelopes','envelopes',`Cellia Daquigan|Joy Orani|Christy Aggasid|Vilma Picana|Novelyn Obiena|Eddie Reposar|Romeo Valdez|Marilou Valdez|Carmen  Valdez|Jhona Gagarin|Marisol Marso|Clarita Valdez|Mariemar Odsinada|Rose Ann Sapungan|Arnulfo Santos|Cesar Dela Cruz|Juanita Ramos|Lhermha Facunla`],
['18 Shots','shots',`Noel Obiena|Norwin Lopez|Alexander Drei Balmores|Ricky Valdez|Mark Angelo De Guzman|Rocen Ignacio|Gian Enoc|John Lloyd Estabillo|Nell john Iglesia|Ronjay Iglesias|Angelo Gamis|Jomar Velaso|Lance Velasco|Erika Ramos|John Rey Carpio|Bryan Jay Carpio|Jim Valdez|Lorence Julliano`],
['18 Roses','roses',`Nestor De Guzman|Victor De Guzman|Mark Angelo De Guzman|Zay Kendrick De Guzman|Severino Dela Cruz|Jessie Dela Cruz|Tonny Castro|John Mark Dela Cruz|John Paul Dela Cruz|Arnel Pili|Carl Vincent Pili|Justin Santos|Arhon Pagaling|Jomar De Guzman|Rudy De Guzman|Maximo De Guzman|Manuel De Guzman|Alvin Jay pili`]
];
const container = document.getElementById('tradition-sections');
traditions.forEach(([title,id,names], index) => {
  const section = document.createElement('section');
  section.className = 'tradition-section reveal'; section.id = id;
  const heading = document.createElement('h2'); heading.textContent = title;
  const kicker = document.createElement('p'); kicker.className = 'section-kicker'; kicker.textContent = `TRADITION ${String(index+1).padStart(2,'0')} · 18 PARTICIPANTS`;
  const intro = document.createElement('p'); intro.className = 'section-intro'; intro.textContent = title === '18 Roses' ? 'A timeless symbol of affection, admiration, and beautiful beginnings.' : 'A little magic, a thoughtful gesture, and memories to treasure.';
  const list = document.createElement('ol'); list.className = 'people-list'; list.id = `${id}-people`;
  const toggle = document.createElement('button'); toggle.className = 'tradition-toggle'; toggle.type = 'button'; toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-controls',list.id); toggle.innerHTML = '<span>VIEW ALL 18 PARTICIPANTS</span><span class="toggle-icon" aria-hidden="true">＋</span>';
  list.hidden = true;
  toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!expanded)); list.hidden = expanded; toggle.querySelector('span:first-child').textContent = expanded ? 'VIEW ALL 18 PARTICIPANTS' : 'HIDE PARTICIPANTS'; toggle.querySelector('.toggle-icon').textContent = expanded ? '＋' : '−'; });
  names.split('|').forEach((name,i) => { const li=document.createElement('li'); const num=document.createElement('span'); num.className='person-number'; num.textContent=String(i+1).padStart(2,'0'); const person=document.createElement('span'); person.textContent=name; li.append(num,person); list.append(li); });
  section.append(kicker,heading,intro,toggle,list); container.append(section);
});
