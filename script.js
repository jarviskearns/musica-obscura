const totalPages = 40;
const pageWidth = 1109;
const pageHeight = 1575;
const spreadRatio = (pageWidth * 2) / pageHeight;

const root = document.documentElement;
const leftPageImage = document.getElementById('leftPageImage');
const rightPageImage = document.getElementById('rightPageImage');
const leftPaper = document.getElementById('leftPaper');
const rightPaper = document.getElementById('rightPaper');
const spread = document.getElementById('spread');
const spreadFrame = document.getElementById('spreadFrame');
const globalFlipLayer = document.getElementById('globalFlipLayer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const forewordText = document.querySelector('.foreword-text');
const contentsItems = [...document.querySelectorAll('.contents-item')];

const articleTexts = {
  "2": "Electronic music is not just shaped by musicians, but by the machines they choose, misuse, repair, collect and build. This magazine looks at the stranger edges of that world: instruments and devices that sit outside the obvious mainstream, from overlooked classics to new tools designed to push sound into less familiar territory. Some machines become interesting because they invite misuse. The TB-303 is the clearest example: a bass accompaniment unit that found a completely different life in acid. Others matter because of their texture, their workflow, or the limits they place on the user, from gritty samplers to modular systems, DIY circuits, dub sirens and wholly unique synths like the Korg Phase 8. What connects them is not simply age or rarity. It is the way design choices, technical limits and accidents can shape new musical ideas. Around these tools is a subculture of musicians, collectors, builders, repairers and archivists treating equipment not as static objects, but as active parts of electronic music’s future. These machines carry history, but they also keep opening up strange, practical and unexpected ways of making sound.",
  "3": "The Roland TB-303 is one of the clearest examples of a machine becoming important for the wrong reason. It was not designed to change dance music. Roland released it in 1981 as a bass accompaniment tool for guitarists, something that could be paired with the TR-606 drum machine for home practice. In that role, it failed. It was meant to imitate an electric bass, but its tone was too synthetic, too rubbery and too obviously electronic. Technically, the 303 was simple, but very particular. It used a single oscillator with sawtooth and square wave options, running into a resonant low-pass filter. That filter became central to the machine’s later identity. When the resonance was pushed up and the cutoff was moved during playback, the sound became sharp, wet and squelching. Instead of sitting behind a track like a normal bass guitar, it cut through the mix as a moving, unstable lead-bass hybrid. The sequencer was just as important. It did not work like a normal keyboard. Notes and timing were entered separately, which made it awkward for its original users but ideal for creating strange, looping patterns. The machine also had accent and slide functions, and these shaped the acid sound as much as the filter did. Accent did more than make a note louder. It also affected the filter envelope, giving certain steps extra bite and movement. Slide connected notes together with a smooth glide, creating the liquid, bending motion that makes 303 lines feel alive rather than rigid. At first, these quirks were part of the problem. Guitarists looking for a realistic bass player in a box had little use for a machine that sounded artificial and had to be programmed in such an indirect way. Production ended in 1984, and the TB-303 became a cheap second-hand oddity. That obscurity made its second life possible. In the mid-1980s, young house producers in Chicago began picking up used 303s because they were affordable. Once removed from its intended purpose, the machine started to make sense. Producers stopped treating it as a fake bassist and started treating it as an instrument with its own logic. The key was live manipulation. By programming short repeating patterns, then moving the cutoff, resonance, envelope modulation and decay controls during playback, producers could make the bassline constantly mutate. The oscillator supplied a simple tone, but the filter and sequencer turned it into something expressive. The interaction between accent, slide and resonance created a sound that seemed to twist, stretch and snap back into the groove. Phuture’s “Acid Tracks”, released in 1987, became the defining example. The track pushed the 303’s strangest qualities to the front: the squelch, the sliding notes, the resonant peaks and the hypnotic repetition. What had made the machine fail commercially became exactly what made it powerful on a dance floor. It was not realistic, but it was unmistakable. As acid house spread from Chicago to the UK, the 303 became tied to clubs, warehouses, raves and independent production. Its repetitive patterns suited long-form dance music. Its filter sweeps could build tension without complex chord changes, and its sliding, accented sequences gave simple loops a sense of pressure and release. The TB-303 shows how electronic music often develops through misuse. Roland made a practice tool, but producers found a genre inside its limitations. The 303’s importance comes from the meeting point between design flaw and creative misuse: an awkward sequencer, a resonant filter, accent behaviour, slide notes and hands-on control. oday, original TB-303s are expensive and heavily mythologised, while clones and software versions are everywhere. But the appeal is not just the tone. It is the workflow. The machine pushes users toward looping, tweaking and performing small changes in real time. Acid house was not planned by a manufacturer. It emerged from people twisting an obscure machine beyond its intended use.",
  "7": "The Akai S950 sits at an important point in electronic music history. It arrived when production was moving away from analogue instruments and tape-based methods, towards a more digital way of working. Instead of only generating sound from synthesisers, producers could record fragments of existing audio and turn them into something new. A drum break, bass note, vocal shout or horn stab could be sampled, pitched and sequenced like an instrument. What made the S950 important was not that it sounded perfect. It was the opposite. Its 12-bit sampling became part of its appeal. The shift from analogue to digital processing changed how producers thought about sound. With tape, editing was physical and slow. With synthesisers, sound usually had to be created from oscillators, filters and envelopes. The sampler changed that. It allowed recorded sound to become flexible material. Producers could take something from one context and rebuild it in another. This opened up a new kind of sound design, based less on playing an instrument and more on cutting, looping, pitching and reworking audio. It also made gave sounds a grainy, compressed character that became instantly recognisable. Drums sounded tougher, vocals became rougher, and bass gained a heavy, slightly dirty texture. Compared with clean modern software, the S950 coloured everything that passed through it. That colour production more accessible. Sampling had existed before, but earlier systems were expensive and often tied to large studios. Machines like the S950 brought that power closer to home producers. You no longer needed a band, a large recording space or expensive session musicians to build a full track. A record collection and a sampler could become the foundation of a production setup. One of the most distinctive digital features was time-stretching. This allowed producers to change the length of a sample without simply changing its pitch. Early time-stretching was far from smooth, but its imperfections were useful. It created metallic edges, stutters, smears and strange digital artefacts. Instead of being hidden, those artefacts became part of the music. This was especially important in jungle. Producers pushed breakbeats faster, chopping and rearranging them into complex rhythms. The S950 helped give those breaks their rough, urgent character. Time-stretched vocals also became a key part of the genre’s sound: ghostly, robotic and stretched beyond natural speech. Jungle did not use digital processing to sound clean. It used it to sound futuristic, unstable and intense. Fatboy Slim’s work also shows how samplers like the S950 shaped sample-based production. His music often relied on bold loops, breakbeats, vocal hooks and recognisable fragments reworked into something direct and energetic. The sampler made this approach practical. It allowed sound to be treated as raw material, not just recorded performance. The Akai S1000, which followed, moved sampling toward cleaner 16-bit stereo sound and a more professional studio workflow. It was more advanced and polished, but the S950 remains important because of its character. Its limitations helped define its sound. In the end, 12-bit sampling was not just a technical stage between analogue and modern digital production. It became an aesthetic of its own. Like most early samplers, the s950 stored its small 120-bit samples on floppy disks",
  "10": "Chris Hampshire is a producer, DJ, label owner and music industry entrepreneur with over thirty years in electronic music. He has sold over 100,000 vinyl records, released more than 100 tracks and built the Recoverworld label group. He is now pursuing doctoral research at the University of Sussex, focusing on media archaeology, vintage production techniques and niche electronic music equipment. What first drew you to electronic music equipment, and how did that shape your identity as a musician and label owner? What first drew me in was sound itself. I liked the idea that you could build something from electricity, using oscillators, filters and voltage rather than traditional instruments. It felt like constructing sound, not just playing notes. The machines had character too. A TR-808 or SH-101 was never just a tool. It pushed you in certain directions. That shaped how I thought about music. I became more interested in process, texture and repetition than technical virtuosity. As a label owner, it made me value identity over trends. You’ve worked in the music industry for many years. How has the culture around electronic music production changed in that time? The biggest change is access. When I started, gear was expensive and knowledge was harder to find. You learned through manuals, mistakes and trial and error. Now, a laptop can do what once required a room full of equipment. That is powerful, but it changes the mindset. Older gear forced commitment. If you had one drum machine, you learned it properly. Electronic music has also moved from local scenes to global networks. In the 1990s, scenes were tied to cities, shops, clubs and pirate radio. Now they exist through platforms and algorithms. In your experience, how does using vintage hardware affect the creative process compared with modern digital tools? Vintage hardware slows you down, but in a useful way. There is no undo button, no endless tracks and no massive preset library. You work with what is in front of you. Machines like the TR-909 or TB-303 have limits built in. That narrows your choices and helps you focus. Digital tools give you precision and flexibility. Vintage hardware gives yo u friction, and that often leads to accidents like noise, timing shifts or unstable tuning. Those accidents can become part of the track. What was your experience with early digital ttechnology? Early digital ttechnology felt exciting, but fragile. MIDI changed everything because it allowed machines to communicate. Atari sequencers made it possible to store and arrange ideas in a new way. At the same time, those s y s t e m s were not always reliable. Computers crashed, memory was limited and timing could be inconsistent. You had to understand floppy disks, file structures and routing. It also changed how you thought about music. You were not only shaping sound directly. You were working with data. Do limitations in older equipment actually enhance creativity? If so, how? Yes, because limitations reduce the number of decisions you have to make. Modern systems can do almost anything, but that freedom can make it harder to finish something. Older equipment gives you structure. A four-track recorder makes you think about arrangement. A monophonic synth makes you focus on one line. A 16-step drum machine shapes the rhythm from the start. Those limits can create identity. What matters is how people push against them. How does the physicality of vintage machines influence musical ideas differently from software-based production? Physical machines change how you think. T urning a knob or moving a fader involves muscle memory. Patch cables show the signal path visually. You understand the sound through your hands as much as your ears. Software is efficient, but it is usually controlled through a Kawai 100f synthesiser mouse or trackpad. Hardware invites more improvisation. You might touch the wrong control and discover something better than what you planned. What defines the subculture around vintage electronic music gear today? Is it sound, aesthetics, nostalgia, or something else? It is all of those things, but also material authenticity. For some people, it is the sound: warmth, drift, distortion and imperfection. For others, it is the design: panels, knobs, wooden sides and the look of the machines. There is nostalgia, but it is not always about wanting to go back. Sometimes it is about resisting how disposable modern ttechnology can feel. Vintage machines age, carry marks and can often be repaired. There is also a strong community built around repair, restoration and shared knowledge. Why do you think younger producers raised on modern tools are becoming interested in analogue and vintage ttechnology? I think physical machines feel fresh to people who grew up with software. When everything is virtual, an object with weight, buttons and limits can feel exciting. Hardware also creates focus. It removes the distractions of screens, updates and endless plug-ins. There is a ritual to it: switching things on, connecting cables and waiting for machines to warm up. There is also curiosity about history. House, techno and electro were shaped by specific machines, and younger producers often want to understand that directly. How are you investigating creativity through historical ttechnology? I am recreating early 1980s production workflows using period-appropriate tools, including four-track cassette recorders, CV/Gate Moog Prodigy sequencing and early drum machines. The aim is not nostalgia. I am interested in what happens when you actually work within those limits. By reducing track counts, recall and automation, you can see how decisions change. Older workflows forced you to make choices while performing. From your research so far, what are the main differences between artists using vintage equipment and those using modern digital systems? The biggest difference is when decisions are made. Vintage workflows are more present-focused. You make choices while recording, and you commit to them earlier. Digital workflows allow you to delay decisions because everything can be edited later. That affects the music itself. Hardware-based tracks often develop through repetition and subtle changes because large edits are harder. Digital music can shift structure very quickly because rearranging is easy. Mistakes are treated differently too. With hardware, mistakes often become part of the character. In digital systems, they are more likely to be corrected. Neither approach is better. They just lead to different results. Looking ahead, what role do you think vintage electronic instruments will play in the future of music production? I think they will have several roles at once. They will be preserved as historical objects because they show how electronic music developed. They will also act as a kind of resistance to screen-based working. At the same time, they will keep being integrated Tascam Ministudio into modern studios. The future is not analogue versus digital. It is more likely to be a hybrid approach. People will use old machines for their feel and character, then use digital tools for editing and arrangement. Vintage instruments also influence new design. Many modern companies are returning to physical controls and simpler interfaces. These machines remind us that ttechnology does not just serve music. It shapes how music is imagined. What is a more obscure piece of vintage equipment that has caught your eye? One that always interests me is the EDP Wasp from the late 1970s. It had a flat membrane keyboard instead of normal keys, and its filter had a really sharp, aggressive character. It was not a polished or luxurious instrument. It felt slightly unstable, but that is part of what makes it compelling. It suggests a different idea of what a synthesiser could be. Another example would be early EMS modular systems, where patching was done with pin matrices instead of cables.Thatinterfacechanges how you think about composition. Obscure machines are fascinating because they show paths that electronic music ttechnology could have taken. They are like parallel histories, and exploring them gives you a broader understanding of how sound, design and creativity connect.",
  "19": "Using hardware in unconventional ways has long been central to experimental sound design. Rather than adhering strictly to intended uses, producers often repurpose equipment, turning mixers into instruments or modular systems into processing chains. This approach emphasises exploration, where the character of the hardware becomes part of the final sound. Routing audio out of your DAW and back through a Eurorack system introduces a distinct layer of control and texture. With a Behringer Eurorack setup, the process is simple but flexible: send a siren tone or signal from your interface into the rack’s stereo inputs, manipulate it, then return it to the DAW via the master output. The signal that comes back carries the imprint of the system, subtly reshaped by the hardware. This is particularly effective when designing a dub siren. While the initial tone may be clean, passing it through the rack allows for hands-on adjustments that feel more immediate than software processing. Stereo width, gain, and digital effects can be shaped in real time using physical controls, encouraging a more interactive workflow. Small movements introduce variations that are difficult to replicate with computer based automation, giving the sound a sense of motion. There is also a tonal aspect tied to early digital hardware. Systems from this period often introduce slight artefacts; aliasing, mild distortion, or phase inconsistencies. Rather than detracting, these qualities can add depth, helping the siren sit more organically in a mix. The process parallels tape-based dub techniques. Instead of analog degradation, transformation occurs through digital resampling. Each pass introduces variation, making the result alive. This lineage can be traced to early accessible DIY instruments such as the PAiA Gnome Synth, which opened synthesis beyond professional studios. Emerging in the 1970s, kits like this encouraged users to assemble their own instruments, building an understanding of signal flow and electronic behaviour. Limitations such as instability, tuning drift, and circuit noise became defining characteristics rather than flaws, shaping a more experimental approach to sound. A more extreme example of this ethos is the Chernobylizer Synth, a chaotic, noise-oriented instrument built around instability and feedback. Rather than precision, it produces harsh, shifting tones through exposed circuits, light sensors, and unstable voltage behaviour. The performer interacts directly with these elements, using touch and proximity to influence the sound, resulting in something unpredictable and difficult to replicate. This approach naturally extends into the world of DIY synthesis, where unpredictability and imperfection are designed into the instrument itself. Building or modifying your own sound sources shifts the focus away from preset-driven workflows and towards process, material, and playful interaction. In a dub context, this aligns with the tradition of creating systems that can be pushed, broken, and reshaped in real time, as explored by King T ubby through his custom built reverbs. 1. Chernobylizer 2. Rorschach video synth 3. Keep mini-modular synth 4. Hexaphonic witchcraft synth 5. modular doll heads by Moon Armada",
  "23": "The Suzuki Omnichord occupies a unique space in the history of electronic instruments. Positioned somewhere between a toy, an auto-accompaniment device, and a practical compositional tool, released in the early 1980s by Suzuki, it was designed to make music more accessible, and in doing so introduced an interface that still feels unconventional today. At the centre of the instrument is the “strumplate,” a touch-sensitive surface that allows the player to trigger notes by brushing across it, while chords are selected separately with the other hand. The contrast between broad gestural strokes and preprogrammed harmony defines how the Omnichord is played. Rather than relying on traditional keyboard or string technique, it encourages a simplified, pattern-based approach that often leads to repetitive structures and looping ideas, particularly suited to minimal compositions, accompanied by more freedom in the strumplate’s melodics. This places the Omnichord within a lineage of toy-instrument crossover devices. Earlier instruments such as the Optigan were similarly marketed for domestic use but later adopted for their distinct sonic character. In both cases, limitations such as preset chords, restricted control, and unusual interfaces became central to their appeal, shaping how musicians approached them and incorporated them into recordings. The Omnichord’s sound reflects its origins. Its internal tones sit between organ presets and early digital synthesis, while built-in rhythms reinforce its auto-accompaniment function. These elements can be isolated or processed further, allowing the instrument to function beyond its intended role in more experimental or studio-based contexts. A well-known example of its use is by Damon Albarn on “Clint Eastwood” by Gorillaz. Here, the Omnichord provides a straightforward harmonic layer. Its chord-based layout makes it useful for quickly establishing structure, and its sound integrates easily into a mix without extensive processing. omni chord",
  "25": "The Korg Phase 8 is an experimental instrument that combines acoustic sound generation with electronic processing. Instead of relying on oscillators, it produces sound using a set of percussive resonators, of which there are over 13 designs, which are mechanically excited. These resonators generate vibrations that are captured using contact microphones and then routed into a processing stage. This approach allows for sound design to be experimented with at the source level. The initial signal already contains complex harmonic content due to the physical behaviour of the resonators, including resonance, inharmonic overtones, and natural decay. Rather than the timbre being constructed through only subtractive synthesis or fx chains, the system modifies an already complex acoustic signal. The instrument reflects development work from Korg Berlin, which focuses on prototype systems and alternative synthesis methods. Their designs prioritise interaction and material behaviour over the standard control layouts of other Korg hardware. In the Phase 8, performance inputs such as strike force, position, or damping, directly affect the signal before processing, producing a wide dynamic and tonal range through physical interaction. As a prototype, it also functions as a test platform for further hybrid design approaches. The concept of integrating acoustic excitation with modular-style processing can inform future instruments, even if the Phase 8 itself is not released as a commercial product.",
  "27": "Modular synthesis is based on a straightforward principle: sound is generated and shaped through discrete components rather than selected from a fixed system. Instead of relying on presets, the user builds a signal path from individual modules; oscillators, filters, envelopes, and sequencers, each performing a specific function. These modules are connected using patch cables, creating a physical signal chain. This makes the process of sound design explicit, as signal flow can be traced and modified in real time. The origins of modular synthesis can be traced to early systems developed by Robert Moog and Don Buchla in the 1960s. Their designs established two different approaches. Moog systems typically used keyboard control and followed more conventional signal routing, making them compatible with existing musical frameworks. Buchla systems avoided traditional interfaces, instead focusing on touch plates, sequencers, and alternative control methods, with an emphasis on experimentation and non-standard structures. A basic modular system usually begins with a voltage- controlled oscillator (VCO), which produces a waveform such as a sawtooth, square, or sine. This signal is processed by a voltage-controlled filter (VCF), which attenuates or emphasises specific frequency ranges. A voltage- controlled amplifier (VCA) controls amplitude, often shaped by an envelope generator (EG) that defines how the sound evolves over time. Low-frequency oscillators (LFOs) are used for modulation, introducing periodic variation. All interactions are governed by control voltage (CV), which carries information such as pitch, timing, and modulation depth. Unlike fixed synthesizers, modular systems typically do not store patches. Settings must be configured manually, and once cables are removed, the configuration is lost. This results in a workflow where sounds are constructed for specific sessions rather than reused. While this limits recall, it allows for more flexible routing and experimentation. Renewed interest in modular synthesis has expanded the range of available modules. Manufacturers now produce units that handle standard synthesis alongside more specialised functions, like random voltage generation, degradation, and complex modulation. parameters such as attack, decay, sustain, and release. LFOs provide cyclical modulation, which can be applied to pitch, amplitude, or filter cutoff to introduce periodic variation. Sequencers and random voltage sources extend this further, generating stepped or unpredictable control signals that can drive pitch, timing, or modulation depth. All modules communicate through control voltage (CV), which carries both audio-rate and low-frequency signals between components. Signal routing is determined entirely by patching, meaning there is no fixed architecture. Each configuration defines a specific signal path, and altering connections changes both behaviour and outcome. Modular synthesis reduces music to its core components: signal generation, control, and routing. Instead of using a fixed instrument, the user assembles a system from individual modules, each performing a defined function. The primary sound source is typically a voltage-controlled oscillator (VCO), which generates basic waveforms such as sine, square, or sawtooth. These signals are then processed by filters, which attenuate or emphasise specific frequency ranges, often introducing resonance or saturation depending on the design. Control is introduced through envelope generators and low-frequency oscillators. An envelope defines amplitude or filter behaviour over time, shaping key elements of synthesis BLue Marvin Ifthebasiccomponentsofmodularsynthesisdefine individual functions, overall behaviour is determined by how those components are interconnected. A modular setup is not limited to a linear signal chain; signals can be split, summed, inverted, or routed back into earlier stages. This makes utility modules, such as mixers, attenuators, offsets, and multiples, structurally important. While they do not generate sound, they control signal amplitude, distribution, and polarity, directly influencing how other modules respond. Modulation is central to system operation. In most modular formats, control voltage inputs are available across nearly all parameters, allowing multiple sources to influence a single destination. A low-frequency oscillator might modulate filter cutoff, while an envelope generator shapes amplitude through a H HH G HH HH H H HH GH G HH GH G HG G H GH HG GG GG G GH G HH GG GH GH GH HG GH H HH HG GG GH GG GG HGG G GG GH H HH H GH HG HG HH G HH H HH H G HH G HG H HG H H HG F GH G HG HG GF HG GG FH HG HG GH F HH GH GH HG HG F HG FG HG EF HH voltage-controlled amplifier. Additional sources, such as random or stepped voltages, introduce variation that is not tied to a fixed cycle. Because modulation signals can be combined, attenuated, or offset, interactions between modules can produce complex and sometimes non-linear results. Feedback routing is another defining feature. By patching outputs back into earlier inputs, the distinction between audio-rate and control-rate signals becomes less fixed. Filters can enter self-oscillation and function as sound sources, while modulation signals can operate at audio frequencies. These configurations can introduce instability depending on gain staging and routing, requiring careful level management. The physical structure of a modular system also affects workflow. Module placement, cable density, and panel layout influence how quickly adjustments can be made and how clearly signal paths can be followed. Changes are implemented directly through patching and control adjustments, without abstraction. System design varies between users. Some prioritise structured layouts with clearly defined signal paths, while others favour more open configurations. In both cases, the system operates as a configurable signal network, where sonics emergefromtheinteractionof many modules rather than any single component.",
  "33": "There is a distinct design approach behind the EMS Synthi A. Released in 1971 by Electronic Music Studios, it was a compact modular synthesizer housed in a portable case. Unlike larger modular systems of the time, which required fixed installations, the Synthi A was designed to be self-contained and transportable. Despite its size, it retained a flexible architecture that allowed for complex signal routing. At the centre of the instrument is its pin matrix, which replaces traditional patch cables. Signals are routed by inserting conductive pins into a grid, connecting oscillators, filters, envelope generators, and other modules. This system allows for quick reconfiguration, but also introduces variability, as signal levels and routing behaviour can be less predictable than fixed connections. The matrix supports both audio-rate and control voltage signals, enabling a wide range of modulation possibilities. The Synthi A includes three oscillators, a noise generator, a filter, envelope shaping, and a spring reverb unit. While functionally complete, it is not designed for precision. The oscillator tuning is sensitive and can drift, making stable pitch control difficult. This behaviour, while technically a limitation, contributes to its characteristic sound. Artists such as Brian Eno, Pink Floyd, and Klaus Schulze have used the Synthi A for its flexibility and its ability to produce non-standard results.",
  "35": "Roland made a deliberate attempt to consolidate several emerging production tools into a single unit. The company combined its S-330 rack-mounted sampler with a 61-key keyboard workstation, added an integrated sequencer, and released the result as the W-30. It arrived in 1989 into a market already populated with increasingly specialised equipment, and while the concept was strong, it never achieved widespread recognition. Its relatively low profile was less about lack of capability and more about timing, pricing pressure, and competition from more focused alternatives. The W-30 offered 16-voice polyphony and up to 24 seconds of sampling time at its highest quality setting, which was competitive within its price bracket. Samples were stored on 3.5-inch floppy disks, a standard format at the time, though now an obvious limitation. The machine supported a range of editing functions, including roland w-30 workstation for the masses looping, truncation, layering, and pitch-shifting. While not as advanced as high-end samplers from Akai or Kurzweil, it provided enough flexibility for most production tasks. Its onboard sequencer included sixteen tracks and could store up to 20 songs internally, allowing it to function as a complete standalone production environment. What distinguished the W-30 was not any individual specification but its integration of multiple roles. It was designed for musicians who wanted to compose, sample, and perform using a single device, rather than building a studio around separate components. This made it particularly appealing to users working within budget constraints or limited space. The keyboard itself was semi-weighted and functional, suitable for input and sequencing but not designed for expressive performance. The interface relied on a relativelysmall LCD display, and navigation required movingthroughlayeredmenus,whichcouldslow down workflow compared to more direct control layouts. Despite these practical limitations, the W-30 developed a distinct sonic identity. Its digital filters introduced noticeable colouration, and its handling of velocity layers added variation to sampled sounds. The combination of 12-bit sampling and playbackthrougha16-bitDACresultedinasound that retained some quantisation noise and grit while benefiting from slightly cleaner output stages. This balance contributed to a texture that many users found particularly musically useful, particularly in genres such as jungle where subtle imperfections added character. The instrument found adoption among producers working in early house, ambient, and sample-based electronic music. Liam Howlett of The Prodigy used the W-30 extensively during the group’s early development, often building tracks around a single unit and later synchronising multiple machines. It remained part of his workflow through The Fat of the Land and continued to serve as a master keyboard in live setups for years afterwards. Steve Hillier used the workstation to program the entirety of Disgraceful by Dubstar, demonstrating its capability as a complete production system. Other artists, including Aphex T win and The Chemical Brothers, have also been associated with the instrument, often citing its tonal character and workflow. Roland discontinued the W-30 in the early 1990s as newer systems with expanded memory, improved interfaces, and greater processingpowerbecamestandard.Itnever reached the same level of recognition as instruments like the D-50 or Juno-106, and salesremainedrelativelymodest.Asaresult, it occupies a less prominent position in the company’s history. oday,workingunitsappearoccasionallyon the secondhand market, often at relatively low prices compared to more well-known vintage equipment. Maintenance can be a challenge, particularly due to the reliance on fl o p p y disk drives, which are prone to failure. Users frequently replace these with modern emulator solutions to maintain functionality. A small but dedicated user base continues to support the W-30, sharing technical documentation, archived sample libraries, and repair techniques. Within this community, the instrument is valued not only for its sound but for its integrated workstation design, which encourages a structured, self-contained approach to music production."
};

let currentSpreadStart = 1;
let currentArticlePage = 2;
let isAnimating = false;

const contentRanges = contentsItems.map((item, index) => {
  const start = Number(item.dataset.page);
  const nextStart = index < contentsItems.length - 1
    ? Number(contentsItems[index + 1].dataset.page)
    : totalPages + 1;

  return {
    item,
    start,
    end: nextStart - 1,
  };
});

function pagePath(pageNumber) {
  return `pages/page-${String(pageNumber).padStart(3, '0')}.jpg`;
}

function setPage(paper, image, pageNumber, side) {
  if (pageNumber < 1 || pageNumber > totalPages) {
    image.removeAttribute('src');
    image.alt = `${side} page empty`;
    paper.classList.add('is-blank');
    return;
  }

  image.src = pagePath(pageNumber);
  image.alt = `MUSICA OBSCURA 001 page ${pageNumber}`;
  image.loading = pageNumber <= 4 ? 'eager' : 'lazy';
  paper.classList.remove('is-blank');
}

function setFlipFace(face, pageNumber) {
  const image = document.createElement('img');

  if (pageNumber < 1 || pageNumber > totalPages) {
    face.classList.add('is-blank');
    image.alt = 'Blank page';
  } else {
    image.src = pagePath(pageNumber);
    image.alt = `MUSICA OBSCURA 001 page ${pageNumber}`;
  }

  face.appendChild(image);
}

function createFlipPage(direction, frontPageNumber, backPageNumber) {
  const page = document.createElement('div');
  const frontFace = document.createElement('div');
  const backFace = document.createElement('div');

  page.className = `flip-page ${direction}`;
  frontFace.className = 'flip-face front';
  backFace.className = 'flip-face back';

  setFlipFace(frontFace, frontPageNumber);
  setFlipFace(backFace, backPageNumber);

  page.appendChild(frontFace);
  page.appendChild(backFace);
  return page;
}

function getCssPixels(variableName, fallback) {
  const raw = getComputedStyle(root).getPropertyValue(variableName).trim();
  const value = Number.parseFloat(raw);
  return Number.isFinite(value) ? value : fallback;
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function spreadArticlePage(spreadStart) {
  return spreadStart <= 1 ? 2 : spreadStart;
}

function updateLayoutSize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const topbarHeight = getCssPixels('--topbar-height', 52);
  const controlsHeight = getCssPixels('--controls-height', 32);
  const mainHeight = Math.max(260, viewportHeight - topbarHeight - controlsHeight);
  const isMobile = viewportWidth <= 760;

  let contentsWidth;
  let forewordWidth;
  let spreadWidth;
  let spreadHeight;
  let mobileStripHeight = 0;
  let mobileForewordHeight = 0;
  let contentsScale;
  let forewordScale;
  let headerScale;
  let lineLeftX;
  let lineGutterX;
  let lineRightX;

  if (isMobile) {
    spreadWidth = Math.floor(viewportWidth);
    spreadHeight = Math.floor(spreadWidth / spreadRatio);

    mobileStripHeight = Math.floor(clamp(viewportWidth * 0.32, 116, 158));
    mobileForewordHeight = Math.floor(clamp(viewportWidth * 0.42, 170, 260));

    contentsWidth = viewportWidth;
    forewordWidth = viewportWidth;

    contentsScale = clamp(Math.pow(mobileStripHeight / 136, 0.35), 0.78, 1.02);
    forewordScale = clamp(Math.pow(viewportWidth / 390, 0.18), 0.82, 1.02);
    headerScale = 1;

    const spreadLeft = (viewportWidth - spreadWidth) / 2;
    lineLeftX = 0;
    lineGutterX = Math.floor(spreadLeft + (spreadWidth / 2));
    lineRightX = viewportWidth;
  } else {
    const baseContentsWidth = 312;
    const baseForewordWidth = 260;
    const minimumForewordWidth = 132;
    const minimumSideWidth = minimumForewordWidth * 2.2;

    spreadHeight = mainHeight;
    spreadWidth = spreadHeight * spreadRatio;

    if (spreadWidth > viewportWidth - minimumSideWidth) {
      spreadWidth = Math.max(260, viewportWidth - minimumSideWidth);
      spreadHeight = spreadWidth / spreadRatio;
    }

    spreadWidth = Math.floor(spreadWidth);
    spreadHeight = Math.floor(spreadHeight);

    const remainingWidth = Math.max(
      Math.floor(minimumSideWidth),
      Math.floor(viewportWidth - spreadWidth)
    );

    forewordWidth = Math.floor(remainingWidth / 2.2);
    contentsWidth = remainingWidth - forewordWidth;

    contentsScale = clamp(Math.pow(contentsWidth / baseContentsWidth, 0.35), 0.68, 1.02);
    forewordScale = clamp(Math.pow(forewordWidth / baseForewordWidth, 0.35), 0.72, 1.03);
    headerScale = 1;

    lineLeftX = contentsWidth;
    lineGutterX = contentsWidth + Math.floor(spreadWidth / 2);
    lineRightX = contentsWidth + spreadWidth;
  }

  root.style.setProperty('--contents-width', `${contentsWidth}px`);
  root.style.setProperty('--spread-width', `${spreadWidth}px`);
  root.style.setProperty('--spread-height', `${spreadHeight}px`);
  root.style.setProperty('--foreword-width', `${forewordWidth}px`);
  root.style.setProperty('--mobile-strip-height', `${mobileStripHeight}px`);
  root.style.setProperty('--mobile-foreword-height', `${mobileForewordHeight}px`);
  root.style.setProperty('--contents-scale', contentsScale.toFixed(4));
  root.style.setProperty('--foreword-scale', forewordScale.toFixed(4));
  root.style.setProperty('--header-scale', headerScale.toFixed(4));
  root.style.setProperty('--line-left-x', `${lineLeftX}px`);
  root.style.setProperty('--line-gutter-x', `${lineGutterX}px`);
  root.style.setProperty('--line-right-x', `${lineRightX}px`);
}

function getContentRangeForPage(pageNumber) {
  return contentRanges.find((range) => pageNumber >= range.start && pageNumber <= range.end)
    || [...contentRanges].reverse().find((range) => pageNumber >= range.start)
    || contentRanges[0];
}

function splitSentencesIntoParagraphs(text, sentencesPerParagraph = 3) {
  const normalisedText = text.replace(/\s+/g, ' ').trim();
  const sentenceMatches = normalisedText.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [normalisedText];
  const paragraphs = [];

  for (let index = 0; index < sentenceMatches.length; index += sentencesPerParagraph) {
    paragraphs.push(sentenceMatches.slice(index, index + sentencesPerParagraph).join(' ').trim());
  }

  return paragraphs.filter(Boolean);
}

function splitParagraphsIntoColumns(paragraphs, columnCount = 5) {
  const safeColumnCount = Math.max(1, Math.min(columnCount, paragraphs.length || 1));

  if (safeColumnCount <= 1) {
    return [paragraphs];
  }

  const forewordScale = Number.parseFloat(getComputedStyle(root).getPropertyValue('--foreword-scale')) || 1;
  const columnWidth = window.innerWidth <= 760
    ? getMobileColumnWidth()
    : Math.max(1, getCssPixels('--foreword-width', 260) - (16 * forewordScale));
  const averageCharacterWidth = 5.45 * forewordScale;
  const charactersPerLine = Math.max(24, Math.floor(columnWidth / averageCharacterWidth));
  const weights = paragraphs.map((paragraph) => estimateParagraphLineCount(paragraph, charactersPerLine) + 0.35);
  const prefixWeights = [0];

  weights.forEach((weight) => {
    prefixWeights.push(prefixWeights[prefixWeights.length - 1] + weight);
  });

  const totalWeight = prefixWeights[prefixWeights.length - 1];
  const targetWeight = totalWeight / safeColumnCount;
  const dp = Array.from({ length: paragraphs.length + 1 }, () => Array(safeColumnCount + 1).fill(Infinity));
  const back = Array.from({ length: paragraphs.length + 1 }, () => Array(safeColumnCount + 1).fill(0));

  dp[0][0] = 0;

  for (let index = 1; index <= paragraphs.length; index += 1) {
    for (let columnsUsed = 1; columnsUsed <= Math.min(safeColumnCount, index); columnsUsed += 1) {
      for (let previousIndex = columnsUsed - 1; previousIndex < index; previousIndex += 1) {
        const groupWeight = prefixWeights[index] - prefixWeights[previousIndex];
        const balanceCost = Math.pow(groupWeight - targetWeight, 2);
        const candidateCost = dp[previousIndex][columnsUsed - 1] + balanceCost;

        if (candidateCost < dp[index][columnsUsed]) {
          dp[index][columnsUsed] = candidateCost;
          back[index][columnsUsed] = previousIndex;
        }
      }
    }
  }

  const columns = Array.from({ length: safeColumnCount }, () => []);
  let endIndex = paragraphs.length;

  for (let columnIndex = safeColumnCount - 1; columnIndex >= 0; columnIndex -= 1) {
    const startIndex = back[endIndex][columnIndex + 1];
    columns[columnIndex] = paragraphs.slice(startIndex, endIndex);
    endIndex = startIndex;
  }

  return columns;
}

function getMobileColumnWidth() {
  return clamp(window.innerWidth * 0.70, 205, 320);
}

function estimateParagraphLineCount(paragraphText, charactersPerLine) {
  const roughChars = Math.max(1, paragraphText.trim().length);
  return Math.max(1, Math.ceil(roughChars / Math.max(1, charactersPerLine)));
}

function getMobileColumnCount(paragraphs) {
  const forewordScale = Number.parseFloat(getComputedStyle(root).getPropertyValue('--foreword-scale')) || 1;
  const columnWidth = getMobileColumnWidth();
  const averageCharacterWidth = 5.45 * forewordScale;
  const charactersPerLine = Math.max(24, Math.floor(columnWidth / averageCharacterWidth));
  const totalLineCount = paragraphs.reduce((sum, paragraph) => {
    return sum + estimateParagraphLineCount(paragraph, charactersPerLine);
  }, 0);
  const minimumLinesPerColumn = 10;

  return clamp(Math.floor(totalLineCount / minimumLinesPerColumn), 1, 5);
}

function appendInterviewQuestionStyling(paragraph, paragraphText) {
  const sentenceMatches = paragraphText.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [paragraphText];

  sentenceMatches.forEach((sentenceText) => {
    const normalisedSentence = sentenceText.replace(/\s+/g, ' ');

    if (normalisedSentence.includes('?')) {
      const question = document.createElement('em');
      question.className = 'article-question';
      question.textContent = normalisedSentence;
      paragraph.appendChild(question);
    } else {
      paragraph.appendChild(document.createTextNode(normalisedSentence));
    }
  });
}

function createColumn(paragraphs) {
  const column = document.createElement('div');
  column.className = 'article-column';

  paragraphs.forEach((paragraphText) => {
    const paragraph = document.createElement('p');
    appendInterviewQuestionStyling(paragraph, paragraphText);
    column.appendChild(paragraph);
  });

  return column;
}

function updateMobileForewordHeight(text) {
  if (window.innerWidth > 760) return;

  const forewordScale = Number.parseFloat(getComputedStyle(root).getPropertyValue('--foreword-scale')) || 1;
  const columnWidth = getMobileColumnWidth();
  const paragraphs = splitSentencesIntoParagraphs(text, 2);
  const mobileColumnCount = getMobileColumnCount(paragraphs);
  const columnParagraphs = splitParagraphsIntoColumns(paragraphs, mobileColumnCount);
  const averageCharacterWidth = 5.45 * forewordScale;
  const charactersPerLine = Math.max(24, Math.floor(columnWidth / averageCharacterWidth));
  const lineHeight = 12.8 * forewordScale;
  const paragraphGap = 4 * forewordScale;
  const verticalPadding = 14 * forewordScale;
  const baseHeight = Math.max(150, window.innerHeight * 0.4);

  const estimatedHeights = columnParagraphs.map((column) => {
    const lineCount = column.reduce((sum, paragraph) => {
      return sum + estimateParagraphLineCount(paragraph, charactersPerLine);
    }, 0);

    return (lineCount * lineHeight) + (Math.max(0, column.length - 1) * paragraphGap) + verticalPadding;
  });

  const requiredHeight = Math.max(...estimatedHeights, 120);
  const height = Math.ceil(Math.max(baseHeight, requiredHeight));

  root.style.setProperty('--mobile-foreword-height', `${height}px`);
}

function updateArticleText() {
  if (!forewordText) return;

  const range = getContentRangeForPage(currentArticlePage);
  const text = articleTexts[String(range.start)] || articleTexts['2'];
  const paragraphs = splitSentencesIntoParagraphs(text, 2);
  const mobileColumnCount = window.innerWidth <= 760 ? getMobileColumnCount(paragraphs) : 1;
  const columns = splitParagraphsIntoColumns(paragraphs, mobileColumnCount);
  const columnWrap = document.createElement('div');

  columnWrap.className = 'article-columns';

  if (window.innerWidth <= 760) {
    const columnWidth = getMobileColumnWidth();
    columnWrap.style.gridTemplateColumns = `repeat(${mobileColumnCount}, ${columnWidth}px)`;
  }

  columns.forEach((columnParagraphs) => columnWrap.appendChild(createColumn(columnParagraphs)));

  forewordText.replaceChildren(columnWrap);
  forewordText.scrollTop = 0;
  forewordText.scrollLeft = 0;
  updateMobileForewordHeight(text);
}

function updateActiveContents() {
  const activeRange = getContentRangeForPage(currentArticlePage);

  contentRanges.forEach(({ item, start }) => {
    item.classList.toggle('is-active', start === activeRange.start);
  });
}

function updateButtons() {
  prevButton.disabled = currentSpreadStart <= 1 || isAnimating;
  nextButton.disabled = currentSpreadStart >= totalPages - 1 || isAnimating;
}

function renderSpread() {
  setPage(leftPaper, leftPageImage, currentSpreadStart, 'Left');
  setPage(rightPaper, rightPageImage, currentSpreadStart + 1, 'Right');
  updateActiveContents();
  updateArticleText();
  updateButtons();
}

function clearGlobalFlipLayer() {
  while (globalFlipLayer.firstChild) {
    globalFlipLayer.removeChild(globalFlipLayer.firstChild);
  }
}

function positionFlipPage(flipPage, direction) {
  const rect = spreadFrame.getBoundingClientRect();
  const pageRect = {
    top: rect.top,
    width: rect.width / 2,
    height: rect.height,
    left: direction === 'next' ? rect.left + rect.width / 2 : rect.left,
  };

  flipPage.style.left = `${pageRect.left}px`;
  flipPage.style.top = `${pageRect.top}px`;
  flipPage.style.width = `${pageRect.width}px`;
  flipPage.style.height = `${pageRect.height}px`;
}

function runTurn(direction, nextSpreadStart) {
  if (isAnimating) return;

  isAnimating = true;
  updateButtons();
  clearGlobalFlipLayer();

  let flipPage;

  if (direction === 'next') {
    flipPage = createFlipPage('next', currentSpreadStart + 1, nextSpreadStart);
    setPage(rightPaper, rightPageImage, nextSpreadStart + 1, 'Right');
  } else {
    flipPage = createFlipPage('prev', currentSpreadStart, nextSpreadStart + 1);
    setPage(leftPaper, leftPageImage, nextSpreadStart, 'Left');
  }

  positionFlipPage(flipPage, direction);
  globalFlipLayer.appendChild(flipPage);

  flipPage.addEventListener('animationend', () => {
    currentSpreadStart = nextSpreadStart;
    currentArticlePage = spreadArticlePage(nextSpreadStart);
    renderSpread();
    clearGlobalFlipLayer();
    isAnimating = false;
    updateButtons();
  }, { once: true });
}

function goToSpreadStart(pageNumber) {
  const spreadStart = pageNumber % 2 === 0 ? pageNumber - 1 : pageNumber;
  const clampedSpreadStart = Math.max(1, Math.min(spreadStart, totalPages - 1));

  currentSpreadStart = clampedSpreadStart;
  currentArticlePage = Math.max(2, Math.min(pageNumber, totalPages));
  clearGlobalFlipLayer();
  isAnimating = false;
  renderSpread();
}

function nextSpread() {
  if (currentSpreadStart >= totalPages - 1 || isAnimating) return;
  runTurn('next', Math.min(totalPages - 1, currentSpreadStart + 2));
}

function previousSpread() {
  if (currentSpreadStart <= 1 || isAnimating) return;
  runTurn('prev', Math.max(1, currentSpreadStart - 2));
}

prevButton.addEventListener('click', previousSpread);
nextButton.addEventListener('click', nextSpread);

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') previousSpread();
  if (event.key === 'ArrowRight') nextSpread();
});

spread.addEventListener('click', (event) => {
  const rect = spread.getBoundingClientRect();
  const clickX = event.clientX - rect.left;

  if (clickX < rect.width / 2) {
    previousSpread();
  } else {
    nextSpread();
  }
});

contentsItems.forEach((item) => {
  item.addEventListener('click', () => {
    goToSpreadStart(Number(item.dataset.page));
  });
});

window.addEventListener('resize', () => {
  updateLayoutSize();
  updateArticleText();
  clearGlobalFlipLayer();
});

updateLayoutSize();
renderSpread();
