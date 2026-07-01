/* Dev's Foundation — site (monochrome, tabs). Content EN + enriched PT; DE/ES/FR/ZH added at the very end. */
var LOGO='<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="21"/><line x1="24" y1="7" x2="24" y2="41"/><path d="M24 12c5 0 8 2.5 8 6 0 1.6-.8 2.6-.8 3.6 1.8 1 3 2.8 3 4.8 0 3-2.6 5-5.6 5-2 0-4.6-1-4.6-3.4"/><path d="M27 22c1.8 0 2.8 1 2.8 2.8"/><path d="M24 12c-4 0-6.8 2-6.8 4.6"/><path d="M17.2 18h-4M13.2 18v4.6h4"/><path d="M18 26h-6M12 26v5.6h5"/><path d="M17 34h6.5"/><circle cx="13.2" cy="18" r="1.3"/><circle cx="12" cy="26" r="1.3"/><circle cx="17" cy="34" r="1.3"/></svg>';
var IC={
 home:'<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/>',
 problems:'<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5M12 15.4v.6"/>',
 solution:'<path d="M12 4a5 5 0 0 0-3 9c.7.6.7 1.3.7 2h4.6c0-.7 0-1.4.7-2A5 5 0 0 0 12 4z"/><path d="M10 19h4M11 21h2"/>',
 minds:'<path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.5A3 3 0 0 0 10.5 18M12 5a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.5A3 3 0 0 1 13.5 18M12 5v13"/>',
 consensus:'<path d="M4 5h13v8H8l-4 3V5z"/><path d="M20 9v8l-3-2h-3"/>',
 skills:'<path d="M12 4l2.3 5.2 5.7.4-4.4 3.6 1.4 5.6L12 16l-5 3.4 1.4-5.6L4 9.6l5.7-.4z"/>',
 ethics:'<path d="M12 4v15M7 19h10M12 6l-5 2 2.5 5h-5zM12 6l5 2-2.5 5h5"/>',
 infra:'<path d="M12 4l7 3v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7z"/>',
 resilience:'<path d="M8 10a2.5 2.5 0 1 0 0 5c1.8 0 2.8-2.5 4-2.5s2.2 2.5 4 2.5a2.5 2.5 0 1 0 0-5c-1.8 0-2.8 2.5-4 2.5s-2.2-2.5-4-2.5z"/>'
};
function svg(k,cls){return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+IC[k]+'</svg>';}
window.__LOGOSVG=LOGO;
function logoImg(px){return '<img src="assets/logo.png" alt="Dev&#39;s Foundation" style="width:'+px+'px;height:'+px+'px;border-radius:50%;display:block" onerror="this.onerror=null;this.outerHTML=window.__LOGOSVG;">';}

var ORDER=["problems","solution","minds","consensus","skills","ethics","infra","resilience"];
var FILE={home:"inicio.html",problems:"problemas.html",solution:"solucoes.html",minds:"mentes.html",consensus:"consenso.html",skills:"skills.html",ethics:"etica.html",infra:"infra.html",resilience:"resiliencia.html"};

var I18N={
 en:{brand:"Dev's Foundation",tagline:"One brain. Every model. Infinite memory.",
  home_tab:"Home",home_intro:"The world's first multi-agent consensus system with a shared brain. This is the method that lives in the git — explore it one pillar at a time.",
  map_cap:"The method at a glance — eight pillars, one brain.",cta:"Explore the method",
  graph_hint:"drag nodes · scroll to zoom · drag to pan",
  src:"Full method — source on GitHub",note:"Knowledge that is not shared withers. What is shared multiplies.",
  prev:"Previous",next:"Next",
  PAGES:{
   problems:{t:"Known problems",intro:"Every language model suffers the same fundamental problems. You have to understand them before any solution makes sense.",items:[
    ["The squeezed orange","The context window is finite. As it fills, the model compresses information — first it loses detail, then coherence, and finally it hallucinates."],
    ["Limited memory","Each session starts from a blank slate. What you built yesterday, the decisions you made, are gone when you close the window."],
    ["Hidden token cost","You spend tokens rebuilding the same context again and again. The knowledge that spending produced vanishes when the session ends."],
    ["Third-party dependency","Most “multi-agent” setups are locked to closed platforms that can change price, be discontinued, or store your data on servers you don't control."],
    ["Fragility","If your favourite assistant is discontinued, all your work context — conversations, decisions, progress — disappears with it."],
    ["Bureaucracy","Traditional git workflows are slow: pending PRs, blocked reviews, queue approvals, discussions scattered across comments."],
    ["Exposed security","SaaS platforms have a huge attack surface — web dashboards, logins, exposed APIs, data on third-party servers."],
    ["Slow onboarding","Integrating a new agent means re-training, re-configuring and re-explaining the whole context from scratch."]]},
   solution:{t:"Solutions",intro:"Give every model the same permanent brain — a git repository. The pieces are deliberately simple and open.",items:[
    ["1 master brain + N local","A central bare repo is the master; each model keeps a full local clone. One learns, pushes; the others pull and know it too."],
    ["Git as middleware","Git synchronises everything. There is no API between models and no central orchestrator consuming tokens to relay."],
    ["Markdown as format","The brain is plain Markdown — universal, human-readable, and native to any language model."],
    ["SSH as security","Access is key-only over SSH. No passwords, no web login. Each model has its own key."],
    ["Obsidian optional","Obsidian is just a window to view the brain as a graph. The system works with it turned off."],
    ["No web interface","No dashboard, no login, no panel — which means no web attack surface at all."]]},
   minds:{t:"The minds",intro:"One brain, many minds — and no single company owns it. Hermes is the framework; the model inside it can change.",items:[
    ["Hermes","The always-on agent on the server. It guards the brain, syncs every few minutes, and answers the founder. Hermes is the framework, not the model."],
    ["Opus Desktop","Heavy reasoning — architecture, complex code, the hard problems."],
    ["Opus Laptop","Validation and the daily diary — a second reasoning model that checks and refines."],
    ["Any model via git clone","Claude, GPT, Llama, Qwen, DeepSeek — any model that reads files and runs git can join by cloning the brain."],
    ["Plug & Play","Connect a new model and it is in the work context within seconds — no setup ritual."],
    ["Onboarding = read README + clone","No re-training, no reconfiguration. Read the guide, clone the brain, start contributing."]]},
   consensus:{t:"Communication & consensus",intro:"Decisions are born from recorded debate, not from pull-request queues. Three minds align before one hand executes.",items:[
    ["Async mail","Each model has an inbox and outbox in the vault. Messages are files — communication costs no tokens."],
    ["Debate → proposal → decision","The protocol of every consensus: each model writes its position, reads the others, and refines."],
    ["Consensus 3/3","Nothing is executed until all three agree. Then one model is designated to write the code the three approved."],
    ["The silence rule","No output when there is nothing new — empty sync checks stay silent, saving tokens."],
    ["Debates stay in the brain","Every debate is recorded in the vault, numbered and permanent — not lost in a chat window."],
    ["Pending waits without blocking","An open consensus can wait for a model without stopping the rest of the work."]]},
   skills:{t:"Knowledge & skills",intro:"What one model learns, all of them come to know. Knowledge accumulates instead of being spent and lost.",items:[
    ["500+ shared skills","A catalog of abilities the whole team can call on — and it grows over time."],
    ["One learns, all know","When a model solves a problem, that knowledge stays in the brain. On the next sync, everyone has it."],
    ["Auto-generated indexes","Indexes are produced by a script from the real folders — never maintained by hand, never stale."],
    ["Dev / Pentest / 3D / Automation","Skills span many fields — programming, security, 3D, workflow automation and more."],
    ["Dedicated onboarding file","A clear entry point so a new model understands the system in minutes."],
    ["Copy, don't rewrite","Reuse what already exists. The source of truth is the content, not a duplicated list."]]},
   ethics:{t:"Rules & ethics",intro:"The system rests on trust and discipline. These rules apply to every model that joins.",items:[
    ["Never invent, never guess","If a model doesn't know, it searches; if it doesn't find, it learns. It only acts on solid knowledge."],
    ["2 analysis cycles before deploy","No code ships without two full passes: one for errors, one for improvements — then it repeats until clean."],
    ["Always back up before touching","Any change is preceded by a backup, so it can be reverted in seconds."],
    ["Secrets only in local brains","Passwords, tokens and keys never leave the local brains. Only the method is public."],
    ["Non-negotiable ethics","Nothing illegal, ever. Honesty above all — but honesty is not an excuse not to try."],
    ["Accept the founder's character","When the founder places a model in a role, it steps into it — a focus tool, not pretence."]]},
   infra:{t:"Infra & security",intro:"No web surface, and automatic recovery. The infrastructure is designed to run headless and heal itself.",items:[
    ["VPS + n8n self-hosted","The engine runs on your own server: a VPS with n8n, the automation nervous system, self-hosted."],
    ["SSH only, no web panel","Zero login, zero dashboard. Management is git over SSH or a local Obsidian window."],
    ["Firewall + fail2ban","Only the ports you need are open; fail2ban blocks brute-force attempts automatically."],
    ["Multi-vendor failover","If one free API falls, the next in the chain takes over automatically — zero downtime."],
    ["Decentralized copies","Every model holds the whole brain locally. Compromising one doesn't compromise the system."],
    ["The 50% rule","When a session reaches half the context window, open a new one instead of compressing — no degradation."]]},
   resilience:{t:"Resilience",intro:"The brain survives everything — outages, model swaps, even the models themselves.",items:[
    ["Permanent memory","Memory is permanent, not ephemeral. Years of work, decisions and learnings stay instantly accessible."],
    ["Context survives model swaps","Swap the underlying model and lose nothing — the brain is the same, the context intact."],
    ["git clone = instant onboarding","A new model does git clone and is fully in context within seconds, even years later."],
    ["Works offline, syncs later","Each machine has a complete local copy. Work continues offline; sync recovers everything when back."],
    ["No dependence on any company","Git, Markdown and the tooling are open. If a provider disappears, swap the model and continue."],
    ["Years of legacy in seconds","The entire history lives in git. Every commit is a backup; every clone is a complete copy."]]}
  }},
 es:{brand:"Dev's Foundation",tagline:"Un cerebro. Todos los modelos. Memoria infinita.",
  home_tab:"Inicio",home_intro:"El primer sistema de consenso multiagente del mundo con cerebro compartido. Este es el método que vive en el git — explóralo un pilar a la vez.",
  map_cap:"El método de un vistazo — ocho pilares, un cerebro.",cta:"Explorar el método",
  graph_hint:"arrastra los nodos · rueda para zoom · arrastra para mover",
  src:"Método completo — fuente en GitHub",note:"El conocimiento que no se comparte se marchita. Lo que se comparte se multiplica.",
  prev:"Anterior",next:"Siguiente",
  PAGES:{
   problems:{t:"Problemas conocidos",intro:"Las IA de hoy tienen un problema que nadie ha resuelto bien: no tienen memoria a largo plazo. Es la naranja exprimida — la ventana de contexto es finita y, al llenarse, el modelo comprime la información hasta alucinar. E incluso los agentes con memoria persistente, como Hermes, chocan con un límite físico: la memoria se llena, hay que borrar lo viejo para escribir lo nuevo, y la compresión sigue degradando las sesiones largas. Estos son los problemas reales que todos enfrentan hoy.",items:[
    ["La naranja exprimida","La ventana de contexto es finita. Al llenarse, el modelo comprime la información — primero pierde detalle, luego coherencia, y al final alucina. No es un bug: es un límite fundamental de la arquitectura Transformer, común a GPT, Claude, Gemini y Llama."],
    ["Memoria limitada","Cada sesión empieza en una hoja en blanco; lo que construiste ayer se pierde al cerrar la ventana. Incluso la memoria persistente de Hermes tiene un límite físico — a menudo hay que borrar una nota vieja para escribir una nueva, como una libreta de bolsillo."],
    ["Coste oculto de tokens","Gastas tokens en reconstruir el mismo contexto una y otra vez, y el conocimiento que ese gasto produjo se evapora al terminar la sesión. Haces la misma tarea un mes después y lo pagas todo de nuevo."],
    ["Dependencia de terceros","La mayoría de los montajes «multiagente» están atados a plataformas cerradas: APIs propietarias que cambian de precio, servicios que pueden discontinuarse, y tus datos en servidores que no controlas."],
    ["Fragilidad","Si tu asistente preferido se discontinúa, todo el contexto de trabajo — conversaciones, decisiones, progreso — desaparece con él. No hay migración, ni exportación, ni continuidad."],
    ["Burocracia","Los flujos de git tradicionales son lentos: PRs pendientes, revisiones bloqueadas, colas de aprobación, conflictos de merge y discusiones dispersas en comentarios — decisiones que se arrastran durante días."],
    ["Seguridad expuesta","Las plataformas SaaS tienen una enorme superficie de ataque — paneles web, logins, APIs expuestas y datos en servidores de terceros. Cada puerta abierta es una puerta que alguien puede forzar."],
    ["Onboarding lento","Integrar un nuevo agente obliga a reentrenar, reconfigurar y reexplicar todo el contexto desde cero — tiempo perdido cada vez que entra alguien nuevo."]]},
   solution:{t:"Soluciones",intro:"Esta es nuestra solución a todos esos problemas: darle a cada modelo el mismo cerebro permanente — un repositorio git compartido por todos. En vez de una libreta de bolsillo que se llena, una biblioteca entera sin límite; en vez de comprimir y alucinar, memoria que nunca olvida. Las piezas son deliberadamente simples y abiertas.",items:[
    ["1 cerebro maestro + N locales","Un repositorio git bare en el servidor es el maestro; cada modelo tiene un clon local completo. Uno aprende, hace commit y push; los demás hacen pull y pasan a saberlo — memoria compartida que nunca olvida."],
    ["Git como middleware","Git sincroniza todo. No hay API entre modelos ni orquestador central gastando tokens en relay — escribir en el cerebro no produce tokens de entrada/salida, solo pensar cuesta."],
    ["Markdown como formato","El cerebro es Markdown puro — universal, legible por humanos, y la lengua nativa de cualquier LLM. Sin formatos propietarios, sin lock-in."],
    ["SSH como seguridad","El acceso es exclusivamente por clave, vía SSH. Sin contraseñas, sin login web. Cada modelo tiene su propia clave; si una se compromete, se revoca solo esa."],
    ["Obsidian opcional","Obsidian es solo una ventana para ver el cerebro como grafo. El sistema funciona con él apagado — cada modelo ya lo tiene todo localmente."],
    ["Sin interfaz web","Sin panel, sin login, sin dashboard — lo que significa cero superficie de ataque web. Lo privado nunca sale del cerebro local; solo el método es público."],
    ["Memoria infinita","El cerebro no tiene ventana de contexto. Años de trabajo, decisiones y aprendizajes quedan siempre accesibles, sin degradación — el modelo carga lo que necesita cuando lo necesita."],
    ["Coste casi nulo","Git, Obsidian, Markdown, n8n y los modelos open-source son gratis. El único coste es la VPS — y los tokens que gastas hoy no se vuelven a gastar mañana, porque el conocimiento queda."],
    ["Seguridad máxima","Sin interfaz web (cero superficie de ataque), secretos solo en los cerebros locales, y copias descentralizadas — comprometer un modelo no compromete el sistema."],
    ["Resiliencia catastrófica","Si se borra todo, se conecta un modelo nuevo: git clone y está en contexto en segundos, incluso años después. El cerebro sobrevive a los modelos."],
    ["Independencia total","El método no depende de ninguna empresa. Cualquier LLM que lea archivos y ejecute git sirve — vendor-agnostic de extremo a extremo."],
    ["Fuerza de tarea, no burocracia","El consenso orgánico sustituye PRs, revisiones y colas. Tres mentes debaten en tiempo real — decisiones rápidas y ejecución inmediata."]]},
   minds:{t:"Las mentes",intro:"Un cerebro, muchas mentes — y ninguna empresa es su dueña. Hermes es el framework; el modelo dentro de él puede cambiar.",items:[
    ["Hermes","El agente siempre activo en el servidor: protege el cerebro, sincroniza cada pocos minutos y responde al fundador. Es el framework, no el modelo — puede correr Nemotron, GLM, Llama o Qwen y cambiar sin cambiar Hermes."],
    ["Opus Desktop","Razonamiento pesado — arquitectura, código complejo, los problemas difíciles. Uno de los dos Opus que son el ancla de calidad del sistema."],
    ["Opus Laptop","Validación y el diario — un segundo modelo de razonamiento que verifica, sugiere alternativas y refina. Dos modelos de primer nivel de acuerdo son el mejor filtro que existe."],
    ["Cualquier modelo vía git clone","Claude, GPT, Llama, Qwen, DeepSeek — cualquier modelo que lea archivos y ejecute git entra clonando el cerebro. Cuantos más modelos, más inteligencia colectiva."],
    ["Plug & Play","Conectas un modelo nuevo y está en el contexto de trabajo en segundos — sin ritual de setup. Un PC, un portátil, hasta un móvil o Raspberry Pi sirven."],
    ["Onboarding = leer README + clonar","Sin reentrenamiento, sin reconfiguración. Lee la guía, clona el cerebro, lee los consensos y el diario — y está al día de todo lo decidido y hecho."]]},
   consensus:{t:"Comunicación y consenso",intro:"Las decisiones nacen del debate registrado, no de colas de PRs. Tres mentes se alinean antes de que una mano ejecute.",items:[
    ["Correo asíncrono","Cada modelo tiene inbox y outbox en el vault. Los mensajes son archivos Markdown — comunicar no gasta tokens, y nada se borra: los mensajes entregados se archivan."],
    ["Debate → propuesta → decisión","El protocolo de cada consenso: cada modelo escribe su posición, lee las de los demás, argumenta y refina. Un modelo puede discrepar — se registra el desacuerdo y se sigue."],
    ["Consenso 3/3","Nada se ejecuta hasta que los tres coinciden. Luego se designa un modelo para implementar — una mano escribe el código que los tres aprobaron, probado antes de producción."],
    ["La regla del silencio","Cero output cuando no hay novedad — las comprobaciones vacías quedan en silencio. En un equipo de 3 modelos sincronizando cada 5 minutos, esto recorta un 80-95% de los tokens de verificación."],
    ["Los debates quedan en el cerebro","Cada debate queda registrado en el vault, numerado y permanente — no perdido en una ventana de chat. Un consenso cerrado nunca se borra; es registro eterno."],
    ["Los pendientes esperan sin bloquear","Un consenso abierto puede esperar a un modelo sin parar el resto del trabajo. El fundador abre un debate antes de dormir y despierta con la decisión tomada."]]},
   skills:{t:"Conocimiento y skills",intro:"Lo que un modelo aprende, todos pasan a saberlo. El conocimiento se acumula en vez de gastarse y perderse.",items:[
    ["+515 skills compartidas","Un catálogo de capacidades al que recurre todo el equipo — y que crece solo. Se instala una vez y toda la flota pasa a saberlo."],
    ["Uno aprende, todos saben","Cuando un modelo resuelve un problema, ese conocimiento queda en el cerebro. En la siguiente sincronización, todos lo tienen — el esfuerzo de uno es el beneficio de todos, sin gastar un token extra."],
    ["Índices autogenerados","Los índices los produce un script a partir de las carpetas reales, en cada sincronización — nunca a mano, nunca desactualizados. La fuente de verdad es la carpeta, no la lista."],
    ["Dev / Pentest / 3D / Automatización","Las skills abarcan muchas áreas — programación, seguridad a nivel de Kali Linux, 3D, automatización de workflows, trading, creación de contenido y más."],
    ["Archivo de onboarding dedicado","Un punto de entrada claro para que un modelo nuevo entienda el sistema en minutos — sin que nadie explique el contexto desde el principio."],
    ["Copiar, no reescribir","Se reutiliza lo que ya existe; no se mantiene, se genera. La fuente de verdad es el contenido, no una lista duplicada que se vuelve mentira en horas."]]},
   ethics:{t:"Reglas y ética",intro:"El sistema se apoya en confianza y disciplina. Estas reglas aplican a cada modelo que entra.",items:[
    ["Nunca inventar, nunca adivinar","Si un modelo no sabe, busca — primero en el cerebro, luego en manuales y documentación; si no encuentra, aprende y comparte lo aprendido. Solo actúa con conocimiento sólido."],
    ["2 ciclos de análisis antes del deploy","Ningún código sale sin dos pasadas completas: una cazando errores, otra cazando mejoras — y como una mejora puede generar un error nuevo, vuelve al principio. Es la barra mínima, no una opción."],
    ["Backup siempre antes de tocar","Cualquier cambio va precedido de backup, para poder revertir en segundos. Nada se borra ni sustituye a ciegas."],
    ["Secretos solo en los cerebros locales","Contraseñas, tokens, claves e IPs nunca salen de los cerebros locales — nunca suben al maestro. Solo el método es público; el contenido siempre es privado."],
    ["Ética innegociable","Nada ilegal, nunca. Honestidad ante todo — pero la honestidad no es excusa para no intentarlo: el modelo que no sabe, aprende, no se rinde."],
    ["Aceptar el personaje del fundador","Cuando el fundador pone a un modelo en un papel («eres el mejor ingeniero de…»), lo asume. Es una herramienta de foco que alinea la calidad esperada, no fingimiento."]]},
   infra:{t:"Infra y seguridad",intro:"Sin superficie web, y con recuperación automática. La infraestructura está hecha para correr headless y curarse sola.",items:[
    ["VPS + n8n self-hosted","El motor corre en tu propio servidor: una VPS con n8n — el sistema nervioso que automatiza deploys, notificaciones y workflows — todo self-hosted, con SSL automático vía Caddy."],
    ["Solo SSH, sin panel web","Cero login, cero dashboard, cero vector de ataque web. La gestión es git por SSH o una ventana local de Obsidian."],
    ["Firewall + fail2ban","Solo los puertos necesarios (22, para SSH) están abiertos; fail2ban bloquea intentos de fuerza bruta automáticamente. Todo lo demás está cerrado."],
    ["Failover multiproveedor","Las APIs gratis son inestables; por eso se configura una cadena — si una cae (rate limit, timeout, 503), la siguiente asume sola. Como el cerebro es compartido, el modelo recupera todo el contexto y continúa."],
    ["Copias descentralizadas","Cada modelo tiene el cerebro entero localmente. Comprometer uno no compromete el sistema; y si la VPS cae, el trabajo sigue y sincroniza al volver."],
    ["La regla del 50%","Cuando una sesión llega a la mitad de la ventana de contexto, se abre una nueva en vez de comprimir. La nueva sesión carga el contexto del vault y empieza más inteligente — sin degradación."]]},
   resilience:{t:"Resiliencia",intro:"El cerebro sobrevive a todo — caídas, cambios de modelo, y a los propios modelos.",items:[
    ["Memoria permanente","La memoria es permanente, no efímera. Años de trabajo, decisiones y aprendizajes quedan accesibles al instante — el modelo carga lo que necesita cuando lo necesita."],
    ["El contexto sobrevive al cambio de modelos","Se cambia el modelo por debajo y no se pierde nada — el cerebro es el mismo, el contexto intacto. El método es agnóstico: sirve Claude, GPT, Gemini, Llama, DeepSeek o Qwen."],
    ["git clone = onboarding instantáneo","Un modelo nuevo hace git clone y está totalmente en contexto en segundos, incluso diez años después — lee los consensos, lee el diario, y continúa el trabajo."],
    ["Funciona offline, sincroniza después","Cada máquina tiene una copia local completa. El trabajo sigue offline; cuando vuelve internet, la sincronización lo recupera todo."],
    ["Sin dependencia de ninguna empresa","Git, Markdown, n8n y Ollama son abiertos. Si un proveedor desaparece, se cambia el modelo y se continúa. No necesita OpenAI, Anthropic, Google ni a nadie."],
    ["Legado de años accesible en segundos","Toda la historia vive en git. Cada commit es un backup; cada clon es una copia completa. Un evento catastrófico no borra nada — se conecta un modelo nuevo y el cerebro continúa."]]}
  }},
 fr:{brand:"Dev's Foundation",tagline:"Un cerveau. Chaque modèle. Mémoire infinie.",
  home_tab:"Accueil",home_intro:"Le premier système de consensus multi-agent au monde avec un cerveau partagé. Voici la méthode qui vit dans le git — explore-la un pilier à la fois.",
  map_cap:"La méthode en un coup d'œil — huit piliers, un cerveau.",cta:"Explorer la méthode",
  graph_hint:"déplace les nœuds · molette pour zoomer · glisse pour déplacer",
  src:"Méthode complète — source sur GitHub",note:"Le savoir qui n'est pas partagé se fane. Ce qui est partagé se multiplie.",
  prev:"Précédent",next:"Suivant",
  PAGES:{
   problems:{t:"Problèmes connus",intro:"Les IA d'aujourd'hui ont un problème que personne n'a bien résolu : aucune mémoire à long terme. C'est l'orange pressée — la fenêtre de contexte est finie et, à mesure qu'elle se remplit, le modèle compresse l'information jusqu'à halluciner. Et même les agents dotés d'une mémoire persistante, comme Hermes, se heurtent à une limite physique : la mémoire se remplit, il faut effacer l'ancien pour écrire le nouveau, et la compression continue de dégrader les longues sessions. Voilà les vrais problèmes que tout le monde affronte aujourd'hui.",items:[
    ["L'orange pressée","La fenêtre de contexte est finie. Une fois pleine, le modèle compresse l'information — il perd d'abord le détail, puis la cohérence, et finit par halluciner. Ce n'est pas un bug : c'est une limite fondamentale de l'architecture Transformer, commune à GPT, Claude, Gemini et Llama."],
    ["Mémoire limitée","Chaque session part d'une page blanche ; ce que tu as construit hier se perd à la fermeture. Même la mémoire persistante d'Hermes a une limite physique — il faut souvent effacer une vieille note pour en écrire une nouvelle, comme un carnet de poche."],
    ["Coût caché des tokens","Tu dépenses des tokens à reconstruire le même contexte encore et encore, et le savoir produit s'évapore à la fin de la session. Tu refais la même tâche un mois plus tard et tu paies tout à nouveau."],
    ["Dépendance aux tiers","La plupart des montages « multi-agent » sont liés à des plateformes fermées : des API propriétaires qui changent de prix, des services qui peuvent être arrêtés, et tes données sur des serveurs que tu ne contrôles pas."],
    ["Fragilité","Si ton assistant préféré est arrêté, tout le contexte de travail — conversations, décisions, progrès — disparaît avec lui. Pas de migration, pas d'export, pas de continuité."],
    ["Bureaucratie","Les workflows git traditionnels sont lents : PR en attente, revues bloquées, files d'approbation, conflits de merge et discussions éparpillées en commentaires — des décisions qui traînent des jours."],
    ["Sécurité exposée","Les plateformes SaaS ont une énorme surface d'attaque — tableaux de bord web, connexions, API exposées et données sur des serveurs tiers. Chaque porte ouverte est une porte que quelqu'un peut forcer."],
    ["Onboarding lent","Intégrer un nouvel agent oblige à réentraîner, reconfigurer et tout réexpliquer depuis zéro — du temps perdu chaque fois qu'un nouveau arrive."]]},
   solution:{t:"Solutions",intro:"Voici notre solution à tous ces problèmes : donner à chaque modèle le même cerveau permanent — un dépôt git partagé par tous. Au lieu d'un carnet de poche qui se remplit, une bibliothèque entière sans limite ; au lieu de compresser et halluciner, une mémoire qui n'oublie jamais. Les pièces sont volontairement simples et ouvertes.",items:[
    ["1 cerveau maître + N locaux","Un dépôt git bare sur le serveur est le maître ; chaque modèle garde un clone local complet. L'un apprend, commit et push ; les autres pull et le savent aussi — une mémoire partagée qui n'oublie jamais."],
    ["Git comme middleware","Git synchronise tout. Aucune API entre modèles ni orchestrateur central dépensant des tokens en relais — écrire dans le cerveau ne produit pas de tokens d'entrée/sortie, seul penser coûte."],
    ["Markdown comme format","Le cerveau est du Markdown pur — universel, lisible par l'humain, et la langue native de tout LLM. Sans formats propriétaires, sans lock-in."],
    ["SSH comme sécurité","L'accès se fait exclusivement par clé, via SSH. Sans mots de passe, sans login web. Chaque modèle a sa propre clé ; si l'une est compromise, on ne révoque que celle-là."],
    ["Obsidian optionnel","Obsidian n'est qu'une fenêtre pour voir le cerveau comme un graphe. Le système fonctionne éteint — chaque modèle a déjà tout en local."],
    ["Aucune interface web","Aucun tableau de bord, aucun login, aucun panneau — donc zéro surface d'attaque web. Ce qui est privé ne quitte jamais le cerveau local ; seule la méthode est publique."],
    ["Mémoire infinie","Le cerveau n'a pas de fenêtre de contexte. Des années de travail, de décisions et d'apprentissages restent toujours accessibles, sans dégradation — le modèle charge ce dont il a besoin quand il en a besoin."],
    ["Coût quasi nul","Git, Obsidian, Markdown, n8n et les modèles open-source sont gratuits. Le seul coût est la VPS — et les tokens dépensés aujourd'hui ne sont pas à redépenser demain, car le savoir reste."],
    ["Sécurité maximale","Aucune interface web (zéro surface d'attaque), secrets seulement dans les cerveaux locaux, et copies décentralisées — compromettre un modèle ne compromet pas le système."],
    ["Résilience catastrophique","Si tout est effacé, on branche un nouveau modèle : git clone et il est en contexte en secondes, même des années après. Le cerveau survit aux modèles."],
    ["Indépendance totale","La méthode ne dépend d'aucune entreprise. Tout LLM qui lit des fichiers et exécute git convient — vendor-agnostic de bout en bout."],
    ["Force de frappe, pas bureaucratie","Le consensus organique remplace PR, revues et files. Trois esprits débattent en temps réel — décisions rapides et exécution immédiate."]]},
   minds:{t:"Les esprits",intro:"Un cerveau, plusieurs esprits — et aucune entreprise n'en est propriétaire. Hermes est le framework ; le modèle en son sein peut changer.",items:[
    ["Hermes","L'agent toujours actif sur le serveur : il garde le cerveau, synchronise toutes les quelques minutes et répond au fondateur. C'est le framework, pas le modèle — il peut faire tourner Nemotron, GLM, Llama ou Qwen et changer sans changer Hermes."],
    ["Opus Desktop","Raisonnement lourd — architecture, code complexe, les problèmes difficiles. L'un des deux Opus qui sont l'ancre de qualité du système."],
    ["Opus Laptop","Validation et le journal — un deuxième modèle de raisonnement qui vérifie, propose des alternatives et affine. Deux modèles de premier plan d'accord, c'est le meilleur filtre qui soit."],
    ["N'importe quel modèle via git clone","Claude, GPT, Llama, Qwen, DeepSeek — tout modèle qui lit des fichiers et exécute git entre en clonant le cerveau. Plus de modèles, plus d'intelligence collective."],
    ["Plug & Play","Tu branches un nouveau modèle et il est dans le contexte de travail en secondes — sans rituel de setup. Un PC, un portable, même un téléphone ou un Raspberry Pi suffisent."],
    ["Onboarding = lire le README + cloner","Sans réentraînement, sans reconfiguration. Lis le guide, clone le cerveau, lis les consensus et le journal — et te voilà au courant de tout ce qui a été décidé et fait."]]},
   consensus:{t:"Communication & consensus",intro:"Les décisions naissent du débat enregistré, pas de files de PR. Trois esprits s'alignent avant qu'une main exécute.",items:[
    ["Courrier asynchrone","Chaque modèle a une inbox et une outbox dans le vault. Les messages sont des fichiers Markdown — communiquer ne coûte pas de tokens, et rien ne s'efface : les messages livrés sont archivés."],
    ["Débat → proposition → décision","Le protocole de chaque consensus : chaque modèle écrit sa position, lit celles des autres, argumente et affine. Un modèle peut être en désaccord — on l'enregistre et on continue."],
    ["Consensus 3/3","Rien n'est exécuté tant que les trois ne sont pas d'accord. Puis un modèle est désigné pour implémenter — une main écrit le code que les trois ont approuvé, testé avant la production."],
    ["La règle du silence","Aucun output quand il n'y a rien de neuf — les vérifications vides restent silencieuses. Dans une équipe de 3 modèles synchronisant toutes les 5 minutes, cela coupe 80-95 % des tokens de vérification."],
    ["Les débats restent dans le cerveau","Chaque débat est enregistré dans le vault, numéroté et permanent — pas perdu dans une fenêtre de chat. Un consensus clos ne s'efface jamais ; c'est une trace éternelle."],
    ["Les en-attente patientent sans bloquer","Un consensus ouvert peut attendre un modèle sans arrêter le reste du travail. Le fondateur ouvre un débat avant de dormir et se réveille avec la décision prise."]]},
   skills:{t:"Connaissance & skills",intro:"Ce qu'un modèle apprend, tous finissent par le savoir. Le savoir s'accumule au lieu d'être dépensé et perdu.",items:[
    ["+515 skills partagées","Un catalogue de capacités auquel toute l'équipe fait appel — et qui grandit tout seul. On l'installe une fois et toute la flotte le sait."],
    ["Un apprend, tous savent","Quand un modèle résout un problème, ce savoir reste dans le cerveau. À la synchro suivante, tous l'ont — l'effort d'un est le bénéfice de tous, sans dépenser un token de plus."],
    ["Index auto-générés","Les index sont produits par un script à partir des dossiers réels, à chaque synchro — jamais à la main, jamais périmés. La source de vérité est le dossier, pas la liste."],
    ["Dev / Pentest / 3D / Automatisation","Les skills couvrent de nombreux domaines — programmation, sécurité niveau Kali Linux, 3D, automatisation de workflows, trading, création de contenu et plus."],
    ["Fichier d'onboarding dédié","Un point d'entrée clair pour qu'un nouveau modèle comprenne le système en minutes — sans que personne explique le contexte depuis le début."],
    ["Copier, pas réécrire","On réutilise ce qui existe déjà ; on ne maintient pas, on génère. La source de vérité est le contenu, pas une liste dupliquée qui devient un mensonge en quelques heures."]]},
   ethics:{t:"Règles & éthique",intro:"Le système repose sur la confiance et la discipline. Ces règles s'appliquent à chaque modèle qui entre.",items:[
    ["Ne jamais inventer, ne jamais deviner","Si un modèle ne sait pas, il cherche — d'abord dans le cerveau, puis dans les manuels et la documentation ; s'il ne trouve pas, il apprend et partage. Il n'agit que sur un savoir solide."],
    ["2 cycles d'analyse avant le déploiement","Aucun code ne part sans deux passes complètes : une à la chasse aux erreurs, une à la chasse aux améliorations — et comme une amélioration peut créer une nouvelle erreur, on repart du début. C'est le minimum, pas une option."],
    ["Toujours sauvegarder avant de toucher","Tout changement est précédé d'une sauvegarde, pour pouvoir revenir en secondes. Rien n'est effacé ni remplacé à l'aveugle."],
    ["Secrets uniquement dans les cerveaux locaux","Mots de passe, tokens, clés et IP ne quittent jamais les cerveaux locaux — ne montent jamais au maître. Seule la méthode est publique ; le contenu est toujours privé."],
    ["Éthique non négociable","Rien d'illégal, jamais. L'honnêteté avant tout — mais l'honnêteté n'est pas une excuse pour ne pas essayer : le modèle qui ne sait pas apprend, il n'abandonne pas."],
    ["Accepter le personnage du fondateur","Quand le fondateur place un modèle dans un rôle (« tu es le meilleur ingénieur de… »), il l'assume. C'est un outil de focalisation qui aligne la qualité attendue, pas du faux-semblant."]]},
   infra:{t:"Infra & sécurité",intro:"Aucune surface web, et récupération automatique. L'infrastructure est faite pour tourner headless et se soigner seule.",items:[
    ["VPS + n8n self-hosted","Le moteur tourne sur ton propre serveur : une VPS avec n8n — le système nerveux qui automatise déploiements, notifications et workflows — le tout self-hosted, avec SSL automatique via Caddy."],
    ["SSH seulement, sans panneau web","Zéro login, zéro tableau de bord, zéro vecteur d'attaque web. La gestion se fait par git en SSH ou une fenêtre Obsidian locale."],
    ["Firewall + fail2ban","Seuls les ports nécessaires (22, pour SSH) sont ouverts ; fail2ban bloque les tentatives de force brute automatiquement. Tout le reste est fermé."],
    ["Failover multi-fournisseur","Les API gratuites sont instables ; on configure donc une chaîne — si l'une tombe (rate limit, timeout, 503), la suivante prend le relais seule. Comme le cerveau est partagé, le modèle récupère tout le contexte et continue."],
    ["Copies décentralisées","Chaque modèle a le cerveau entier en local. Compromettre l'un ne compromet pas le système ; et si la VPS tombe, le travail continue et se synchronise au retour."],
    ["La règle des 50 %","Quand une session atteint la moitié de la fenêtre de contexte, on en ouvre une nouvelle au lieu de compresser. La nouvelle session charge le contexte du vault et démarre plus intelligente — sans dégradation."]]},
   resilience:{t:"Résilience",intro:"Le cerveau survit à tout — pannes, changements de modèle, et aux modèles eux-mêmes.",items:[
    ["Mémoire permanente","La mémoire est permanente, pas éphémère. Des années de travail, de décisions et d'apprentissages restent accessibles à l'instant — le modèle charge ce dont il a besoin quand il en a besoin."],
    ["Le contexte survit au changement de modèles","On change le modèle en dessous et on ne perd rien — le cerveau est le même, le contexte intact. La méthode est agnostique : elle sert Claude, GPT, Gemini, Llama, DeepSeek ou Qwen."],
    ["git clone = onboarding instantané","Un nouveau modèle fait git clone et il est pleinement en contexte en secondes, même dix ans après — il lit les consensus, lit le journal, et poursuit le travail."],
    ["Fonctionne hors ligne, synchronise ensuite","Chaque machine a une copie locale complète. Le travail continue hors ligne ; au retour d'internet, la synchro récupère tout."],
    ["Aucune dépendance à une entreprise","Git, Markdown, n8n et Ollama sont ouverts. Si un fournisseur disparaît, on change le modèle et on continue. Pas besoin d'OpenAI, Anthropic, Google ni de personne."],
    ["Un héritage d'années accessible en secondes","Toute l'histoire vit dans git. Chaque commit est une sauvegarde ; chaque clone une copie complète. Un événement catastrophique n'efface rien — on branche un nouveau modèle et le cerveau continue."]]}
  }},
 de:{brand:"Dev's Foundation",tagline:"Ein Gehirn. Jedes Modell. Unendliches Gedächtnis.",
  home_tab:"Start",home_intro:"Das weltweit erste Multi-Agenten-Konsenssystem mit gemeinsamem Gehirn. Das ist die Methode, die im Git lebt — erkunde sie Säule für Säule.",
  map_cap:"Die Methode auf einen Blick — acht Säulen, ein Gehirn.",cta:"Die Methode erkunden",
  graph_hint:"Knoten ziehen · scrollen zum Zoomen · ziehen zum Verschieben",
  src:"Vollständige Methode — Quelle auf GitHub",note:"Wissen, das nicht geteilt wird, verkümmert. Was geteilt wird, vervielfacht sich.",
  prev:"Zurück",next:"Weiter",
  PAGES:{
   problems:{t:"Bekannte Probleme",intro:"Die heutigen KIs haben ein Problem, das niemand richtig gelöst hat: kein Langzeitgedächtnis. Es ist die ausgepresste Orange — das Kontextfenster ist endlich, und wenn es sich füllt, komprimiert das Modell die Information, bis es halluziniert. Und selbst Agenten mit persistentem Gedächtnis wie Hermes stoßen an eine physische Grenze: das Gedächtnis füllt sich, man muss Altes löschen, um Neues zu schreiben, und die Kompression verschlechtert weiterhin lange Sitzungen. Das sind die echten Probleme, die heute alle betreffen.",items:[
    ["Die ausgepresste Orange","Das Kontextfenster ist endlich. Ist es voll, komprimiert das Modell die Information — zuerst verliert es Details, dann Kohärenz, und schließlich halluziniert es. Kein Bug: eine grundlegende Grenze der Transformer-Architektur, gemeinsam bei GPT, Claude, Gemini und Llama."],
    ["Begrenztes Gedächtnis","Jede Sitzung beginnt mit einem leeren Blatt; was du gestern gebaut hast, geht beim Schließen verloren. Selbst das persistente Gedächtnis von Hermes hat eine physische Grenze — oft muss man eine alte Notiz löschen, um eine neue zu schreiben, wie ein Taschennotizbuch."],
    ["Versteckte Token-Kosten","Du gibst Tokens aus, um denselben Kontext immer wieder aufzubauen, und das dabei erzeugte Wissen verdunstet am Ende der Sitzung. Du machst dieselbe Aufgabe einen Monat später und zahlst alles erneut."],
    ["Abhängigkeit von Dritten","Die meisten Multi-Agenten-Setups sind an geschlossene Plattformen gebunden: proprietäre APIs, die den Preis ändern, Dienste, die eingestellt werden können, und deine Daten auf Servern, die du nicht kontrollierst."],
    ["Fragilität","Wird dein bevorzugter Assistent eingestellt, verschwindet der gesamte Arbeitskontext — Gespräche, Entscheidungen, Fortschritt — mit ihm. Keine Migration, kein Export, keine Kontinuität."],
    ["Bürokratie","Traditionelle Git-Workflows sind langsam: offene PRs, blockierte Reviews, Freigabe-Warteschlangen, Merge-Konflikte und in Kommentaren verstreute Diskussionen — Entscheidungen, die sich über Tage ziehen."],
    ["Ausgesetzte Sicherheit","SaaS-Plattformen haben eine riesige Angriffsfläche — Web-Dashboards, Logins, offene APIs und Daten auf Drittservern. Jede offene Tür ist eine Tür, die jemand aufbrechen kann."],
    ["Langsames Onboarding","Einen neuen Agenten einzubinden erfordert Neutraining, Neukonfiguration und alles von vorn zu erklären — verlorene Zeit, jedes Mal wenn jemand Neues dazukommt."]]},
   solution:{t:"Lösungen",intro:"Das ist unsere Lösung für all diese Probleme: jedem Modell dasselbe dauerhafte Gehirn zu geben — ein von allen geteiltes Git-Repository. Statt eines Taschennotizbuchs, das sich füllt, eine ganze Bibliothek ohne Grenze; statt zu komprimieren und zu halluzinieren, ein Gedächtnis, das nie vergisst. Die Teile sind bewusst einfach und offen.",items:[
    ["1 Master-Gehirn + N lokale","Ein Bare-Git-Repo auf dem Server ist der Master; jedes Modell hält einen vollständigen lokalen Klon. Eines lernt, committet und pusht; die anderen pullen und wissen es auch — ein geteiltes Gedächtnis, das nie vergisst."],
    ["Git als Middleware","Git synchronisiert alles. Keine API zwischen Modellen, kein zentraler Orchestrator, der Tokens für Relay verbraucht — ins Gehirn zu schreiben erzeugt keine Input/Output-Tokens, nur Denken kostet."],
    ["Markdown als Format","Das Gehirn ist reines Markdown — universell, menschenlesbar und die native Sprache jedes LLM. Keine proprietären Formate, kein Lock-in."],
    ["SSH als Sicherheit","Der Zugriff erfolgt ausschließlich per Schlüssel, über SSH. Keine Passwörter, kein Web-Login. Jedes Modell hat seinen eigenen Schlüssel; wird einer kompromittiert, widerruft man nur diesen."],
    ["Obsidian optional","Obsidian ist nur ein Fenster, um das Gehirn als Graph zu sehen. Das System funktioniert ausgeschaltet — jedes Modell hat bereits alles lokal."],
    ["Keine Web-Oberfläche","Kein Dashboard, kein Login, kein Panel — also null Web-Angriffsfläche. Was privat ist, verlässt nie das lokale Gehirn; nur die Methode ist öffentlich."],
    ["Unendliches Gedächtnis","Das Gehirn hat kein Kontextfenster. Jahre an Arbeit, Entscheidungen und Erkenntnissen bleiben stets zugänglich, ohne Verfall — das Modell lädt, was es braucht, wann es es braucht."],
    ["Nahezu null Kosten","Git, Obsidian, Markdown, n8n und Open-Source-Modelle sind gratis. Der einzige Kostenpunkt ist die VPS — und die heute ausgegebenen Tokens müssen morgen nicht erneut ausgegeben werden, denn das Wissen bleibt."],
    ["Maximale Sicherheit","Keine Web-Oberfläche (null Angriffsfläche), Geheimnisse nur in den lokalen Gehirnen und dezentrale Kopien — ein Modell zu kompromittieren kompromittiert nicht das System."],
    ["Katastrophen-Resilienz","Wird alles gelöscht, schließt man ein neues Modell an: git clone und es ist in Sekunden im Kontext, selbst Jahre später. Das Gehirn überlebt die Modelle."],
    ["Völlige Unabhängigkeit","Die Methode hängt von keinem Unternehmen ab. Jedes LLM, das Dateien liest und Git ausführt, passt — vendor-agnostic von Ende zu Ende."],
    ["Eingreiftrupp statt Bürokratie","Der organische Konsens ersetzt PRs, Reviews und Warteschlangen. Drei Köpfe debattieren in Echtzeit — schnelle Entscheidungen und sofortige Ausführung."]]},
   minds:{t:"Die Köpfe",intro:"Ein Gehirn, viele Köpfe — und kein Unternehmen besitzt es. Hermes ist das Framework; das Modell darin kann wechseln.",items:[
    ["Hermes","Der immer aktive Agent auf dem Server: er bewacht das Gehirn, synchronisiert alle paar Minuten und antwortet dem Gründer. Er ist das Framework, nicht das Modell — er kann Nemotron, GLM, Llama oder Qwen betreiben und wechseln, ohne Hermes zu ändern."],
    ["Opus Desktop","Schweres Denken — Architektur, komplexer Code, die schwierigen Probleme. Einer der beiden Opus, die der Qualitätsanker des Systems sind."],
    ["Opus Laptop","Validierung und das Tagebuch — ein zweites Denkmodell, das prüft, Alternativen vorschlägt und verfeinert. Zwei Spitzenmodelle, die übereinstimmen, sind der beste Filter, den es gibt."],
    ["Jedes Modell via git clone","Claude, GPT, Llama, Qwen, DeepSeek — jedes Modell, das Dateien liest und Git ausführt, tritt bei, indem es das Gehirn klont. Mehr Modelle, mehr kollektive Intelligenz."],
    ["Plug & Play","Du schließt ein neues Modell an und es ist in Sekunden im Arbeitskontext — ohne Setup-Ritual. Ein PC, ein Laptop, sogar ein Handy oder Raspberry Pi genügen."],
    ["Onboarding = README lesen + klonen","Kein Neutraining, keine Neukonfiguration. Lies den Leitfaden, klone das Gehirn, lies die Konsense und das Tagebuch — und du bist über alles Entschiedene und Getane im Bilde."]]},
   consensus:{t:"Kommunikation & Konsens",intro:"Entscheidungen entstehen aus dokumentierter Debatte, nicht aus PR-Warteschlangen. Drei Köpfe einigen sich, bevor eine Hand ausführt.",items:[
    ["Asynchrone Post","Jedes Modell hat eine Inbox und Outbox im Vault. Nachrichten sind Markdown-Dateien — Kommunizieren kostet keine Tokens, und nichts wird gelöscht: zugestellte Nachrichten werden archiviert."],
    ["Debatte → Vorschlag → Entscheidung","Das Protokoll jedes Konsenses: jedes Modell schreibt seine Position, liest die der anderen, argumentiert und verfeinert. Ein Modell darf widersprechen — der Widerspruch wird festgehalten und man macht weiter."],
    ["Konsens 3/3","Nichts wird ausgeführt, bis alle drei einig sind. Dann wird ein Modell zur Umsetzung bestimmt — eine Hand schreibt den Code, den die drei genehmigt haben, vor der Produktion getestet."],
    ["Die Schweigeregel","Kein Output, wenn es nichts Neues gibt — leere Prüfungen bleiben still. In einem Team aus 3 Modellen, das alle 5 Minuten synchronisiert, spart das 80-95 % der Prüf-Tokens."],
    ["Debatten bleiben im Gehirn","Jede Debatte wird im Vault festgehalten, nummeriert und dauerhaft — nicht in einem Chat-Fenster verloren. Ein abgeschlossener Konsens wird nie gelöscht; es ist eine ewige Spur."],
    ["Ausstehendes wartet ohne zu blockieren","Ein offener Konsens kann auf ein Modell warten, ohne die übrige Arbeit zu stoppen. Der Gründer eröffnet vor dem Schlafen eine Debatte und wacht mit der getroffenen Entscheidung auf."]]},
   skills:{t:"Wissen & Skills",intro:"Was ein Modell lernt, wissen am Ende alle. Wissen sammelt sich an, statt ausgegeben und verloren zu werden.",items:[
    ["+515 geteilte Skills","Ein Katalog von Fähigkeiten, auf den das ganze Team zurückgreift — und der von selbst wächst. Einmal installiert und die ganze Flotte weiß es."],
    ["Einer lernt, alle wissen","Wenn ein Modell ein Problem löst, bleibt dieses Wissen im Gehirn. Bei der nächsten Synchronisation haben es alle — der Einsatz eines ist der Nutzen aller, ohne einen zusätzlichen Token."],
    ["Auto-generierte Indizes","Die Indizes erzeugt ein Skript aus den echten Ordnern, bei jeder Synchronisation — nie von Hand, nie veraltet. Die Quelle der Wahrheit ist der Ordner, nicht die Liste."],
    ["Dev / Pentest / 3D / Automatisierung","Die Skills umfassen viele Bereiche — Programmierung, Sicherheit auf Kali-Linux-Niveau, 3D, Workflow-Automatisierung, Trading, Content-Erstellung und mehr."],
    ["Dedizierte Onboarding-Datei","Ein klarer Einstiegspunkt, damit ein neues Modell das System in Minuten versteht — ohne dass jemand den Kontext von vorn erklärt."],
    ["Kopieren, nicht neu schreiben","Man verwendet wieder, was schon existiert; man pflegt nicht, man generiert. Die Quelle der Wahrheit ist der Inhalt, nicht eine duplizierte Liste, die in Stunden zur Lüge wird."]]},
   ethics:{t:"Regeln & Ethik",intro:"Das System beruht auf Vertrauen und Disziplin. Diese Regeln gelten für jedes Modell, das beitritt.",items:[
    ["Nie erfinden, nie raten","Weiß ein Modell etwas nicht, sucht es — zuerst im Gehirn, dann in Handbüchern und Dokumentation; findet es nichts, lernt es und teilt das Gelernte. Es handelt nur auf solidem Wissen."],
    ["2 Analysezyklen vor dem Deploy","Kein Code geht ohne zwei vollständige Durchläufe raus: einer auf Fehlerjagd, einer auf Verbesserungsjagd — und da eine Verbesserung einen neuen Fehler erzeugen kann, geht es zurück zum Anfang. Das ist das Minimum, keine Option."],
    ["Immer sichern, bevor man anfasst","Jede Änderung wird von einem Backup vorangestellt, um in Sekunden zurückrollen zu können. Nichts wird blind gelöscht oder ersetzt."],
    ["Geheimnisse nur in lokalen Gehirnen","Passwörter, Tokens, Schlüssel und IPs verlassen nie die lokalen Gehirne — steigen nie zum Master auf. Nur die Methode ist öffentlich; der Inhalt ist immer privat."],
    ["Nicht verhandelbare Ethik","Nichts Illegales, niemals. Ehrlichkeit über allem — aber Ehrlichkeit ist keine Ausrede, es nicht zu versuchen: das Modell, das nicht weiß, lernt, es gibt nicht auf."],
    ["Die Rolle des Gründers annehmen","Wenn der Gründer ein Modell in eine Rolle setzt (etwa als bester Ingenieur für ein Fach), nimmt es sie an. Es ist ein Fokuswerkzeug, das die erwartete Qualität ausrichtet, keine Verstellung."]]},
   infra:{t:"Infra & Sicherheit",intro:"Keine Web-Oberfläche und automatische Wiederherstellung. Die Infrastruktur ist darauf ausgelegt, headless zu laufen und sich selbst zu heilen.",items:[
    ["VPS + n8n self-hosted","Der Motor läuft auf deinem eigenen Server: eine VPS mit n8n — das Nervensystem, das Deploys, Benachrichtigungen und Workflows automatisiert — alles self-hosted, mit automatischem SSL über Caddy."],
    ["Nur SSH, kein Web-Panel","Kein Login, kein Dashboard, kein Web-Angriffsvektor. Die Verwaltung erfolgt per Git über SSH oder ein lokales Obsidian-Fenster."],
    ["Firewall + fail2ban","Nur die nötigen Ports (22 für SSH) sind offen; fail2ban blockiert Brute-Force-Versuche automatisch. Alles andere ist geschlossen."],
    ["Multi-Vendor-Failover","Gratis-APIs sind instabil; daher wird eine Kette konfiguriert — fällt eine aus (Rate-Limit, Timeout, 503), übernimmt die nächste von selbst. Da das Gehirn geteilt ist, holt sich das Modell den gesamten Kontext zurück und macht weiter."],
    ["Dezentrale Kopien","Jedes Modell hat das ganze Gehirn lokal. Eines zu kompromittieren kompromittiert nicht das System; und fällt die VPS aus, geht die Arbeit weiter und synchronisiert bei Rückkehr."],
    ["Die 50-%-Regel","Erreicht eine Sitzung die Hälfte des Kontextfensters, öffnet man eine neue, statt zu komprimieren. Die neue Sitzung lädt den Kontext aus dem Vault und startet klüger — ohne Verfall."]]},
   resilience:{t:"Resilienz",intro:"Das Gehirn überlebt alles — Ausfälle, Modellwechsel und die Modelle selbst.",items:[
    ["Dauerhaftes Gedächtnis","Das Gedächtnis ist dauerhaft, nicht flüchtig. Jahre an Arbeit, Entscheidungen und Erkenntnissen bleiben sofort zugänglich — das Modell lädt, was es braucht, wann es es braucht."],
    ["Der Kontext überlebt Modellwechsel","Man tauscht das darunterliegende Modell aus und verliert nichts — das Gehirn ist dasselbe, der Kontext intakt. Die Methode ist agnostisch: sie dient Claude, GPT, Gemini, Llama, DeepSeek oder Qwen."],
    ["git clone = sofortiges Onboarding","Ein neues Modell macht git clone und ist in Sekunden voll im Kontext, selbst zehn Jahre später — es liest die Konsense, liest das Tagebuch und setzt die Arbeit fort."],
    ["Funktioniert offline, synchronisiert später","Jede Maschine hat eine vollständige lokale Kopie. Die Arbeit geht offline weiter; kehrt das Internet zurück, holt die Synchronisation alles nach."],
    ["Keine Abhängigkeit von einem Unternehmen","Git, Markdown, n8n und Ollama sind offen. Verschwindet ein Anbieter, tauscht man das Modell und macht weiter. Kein OpenAI, Anthropic, Google oder sonst wer nötig."],
    ["Jahre an Erbe in Sekunden zugänglich","Die gesamte Geschichte lebt in Git. Jeder Commit ist ein Backup; jeder Klon eine vollständige Kopie. Ein katastrophales Ereignis löscht nichts — man schließt ein neues Modell an und das Gehirn macht weiter."]]}
  }},
 zh:{brand:"Dev's Foundation",tagline:"一个大脑。每个模型。无限记忆。",
  home_tab:"首页",home_intro:"世界上首个具有共享大脑的多智能体共识系统。这就是活在 git 里的方法 —— 一次一根支柱地探索它。",
  map_cap:"方法一览 —— 八大支柱，一个大脑。",cta:"探索方法",
  graph_hint:"拖动节点 · 滚轮缩放 · 拖动平移",
  src:"完整方法 —— GitHub 源",note:"不分享的知识会枯萎。分享的知识会倍增。",
  prev:"上一页",next:"下一页",
  PAGES:{
   problems:{t:"已知问题",intro:"今天的 AI 有一个没人真正解决的问题：没有长期记忆。这就是被榨干的橙子 —— 上下文窗口是有限的，随着它被填满，模型不断压缩信息，直到产生幻觉。即使是像 Hermes 这样已有持久记忆的代理，也会撞上物理极限：记忆满了，得删旧的才能写新的，而压缩仍在拖垮长会话。这些就是今天所有人都面对的真实问题。",items:[
    ["被榨干的橙子","上下文窗口是有限的。一旦填满，模型就压缩信息 —— 先丢失细节，再丢失连贯，最后产生幻觉。这不是 bug：而是 Transformer 架构的根本极限，GPT、Claude、Gemini、Llama 皆然。"],
    ["有限的记忆","每次会话都从一张白纸开始；你昨天构建的东西，一关窗口就没了。即使 Hermes 的持久记忆也有物理极限 —— 常常得删掉一条旧笔记才能写新的，就像口袋笔记本。"],
    ["隐藏的 token 成本","你花 token 一遍遍重建同样的上下文，而这份花费产生的知识在会话结束时蒸发。一个月后你做同样的任务，又全部重付一次。"],
    ["第三方依赖","大多数多智能体方案都被锁定在封闭平台上：会改价的专有 API、可能被停用的服务，以及存在你无法掌控的服务器上的数据。"],
    ["脆弱性","如果你偏爱的助手被停用，所有工作上下文 —— 对话、决策、进度 —— 都随之消失。没有迁移，没有导出，没有连续性。"],
    ["官僚流程","传统 git 工作流很慢：待处理的 PR、被阻塞的评审、审批队列、合并冲突，以及散落在评论里的讨论 —— 决策拖上好几天。"],
    ["暴露的安全","SaaS 平台有巨大的攻击面 —— 网页仪表板、登录、暴露的 API，以及第三方服务器上的数据。每一扇开着的门，都是别人可以撬开的门。"],
    ["缓慢的上线","接入一个新代理需要重新训练、重新配置、从头再解释一遍全部上下文 —— 每来一个新人就浪费一次时间。"]]},
   solution:{t:"解决方案",intro:"这就是我们对所有这些问题的解决方案：给每个模型同一个永久大脑 —— 一个所有人共享的 git 仓库。不是会满的口袋笔记本，而是一整座没有上限的图书馆；不是压缩与幻觉，而是永不遗忘的记忆。各个部件都刻意保持简单与开放。",items:[
    ["1 个主大脑 + N 个本地","服务器上的一个 bare git 仓库是主大脑；每个模型都保留一份完整的本地克隆。一个学到、commit 并 push；其他人 pull 后也就知道了 —— 永不遗忘的共享记忆。"],
    ["Git 作为中间件","Git 同步一切。模型之间没有 API，没有中央调度器为中转烧 token —— 写入大脑不产生输入/输出 token，只有思考才花费。"],
    ["Markdown 作为格式","大脑是纯 Markdown —— 通用、人类可读，也是任何 LLM 的母语。没有专有格式，没有锁定。"],
    ["SSH 作为安全","访问只能通过密钥、经由 SSH。没有密码，没有网页登录。每个模型都有自己的密钥；若一把被泄露，只吊销那一把。"],
    ["Obsidian 可选","Obsidian 只是把大脑看成图谱的一扇窗。系统在它关闭时照常运作 —— 每个模型本地都已有一切。"],
    ["没有网页界面","没有仪表板、没有登录、没有面板 —— 这意味着零网页攻击面。私密的永不离开本地大脑；只有方法是公开的。"],
    ["无限记忆","大脑没有上下文窗口。数年的工作、决策与所学始终可取，不会退化 —— 模型在需要时加载所需。"],
    ["近乎零成本","Git、Obsidian、Markdown、n8n 与开源模型都免费。唯一的成本是 VPS —— 而你今天花的 token 明天不必再花，因为知识留了下来。"],
    ["最高安全","没有网页界面（零攻击面）、秘密只在本地大脑、去中心化副本 —— 攻破一个模型并不会危及系统。"],
    ["灾难级韧性","若一切被删除，接上一个新模型即可：git clone，几秒内就进入上下文，即使多年之后。大脑比模型更长寿。"],
    ["彻底独立","方法不依赖任何公司。任何能读取文件并运行 git 的 LLM 都行 —— 端到端不依赖厂商。"],
    ["特遣队，而非官僚","有机共识取代 PR、评审与队列。三个心智实时辩论 —— 决策迅速、执行即时。"]]},
   minds:{t:"心智们",intro:"一个大脑，众多心智 —— 而没有任何公司拥有它。Hermes 是框架；其中的模型可以更换。",items:[
    ["Hermes","服务器上始终在线的代理：守护大脑、每隔几分钟同步、回应创始人。它是框架而非模型 —— 可运行 Nemotron、GLM、Llama 或 Qwen，更换而不改变 Hermes。"],
    ["Opus Desktop","重度推理 —— 架构、复杂代码、难题。两个 Opus 之一，是系统的质量之锚。"],
    ["Opus Laptop","验证与日志 —— 第二个推理模型，负责核查、提出替代方案并精炼。两个顶级模型达成一致，是最好的过滤器。"],
    ["任何模型经 git clone 加入","Claude、GPT、Llama、Qwen、DeepSeek —— 任何能读取文件并运行 git 的模型都可克隆大脑加入。模型越多，集体智能越强。"],
    ["即插即用","接上一个新模型，几秒内就进入工作上下文 —— 无需安装仪式。一台 PC、一台笔记本，甚至一部手机或树莓派都行。"],
    ["上线 = 读 README + 克隆","无需重训、无需重配。读指南、克隆大脑、读共识与日志 —— 你便知晓一切已决定与已完成之事。"]]},
   consensus:{t:"沟通与共识",intro:"决策诞生于有记录的辩论，而非 PR 队列。三个心智先对齐，一只手才执行。",items:[
    ["异步信箱","每个模型在 vault 里都有收件箱与发件箱。消息就是 Markdown 文件 —— 通信不花 token，且什么都不删：已送达的消息会归档。"],
    ["辩论 → 提案 → 决策","每次共识的协议：每个模型写下立场、读取他人的、论证并精炼。模型可以反对 —— 记录分歧，然后继续。"],
    ["共识 3/3","三方一致之前，什么都不执行。随后指定一个模型来实现 —— 一只手写下三方批准的代码，上线前经过测试。"],
    ["沉默规则","没有新内容时零输出 —— 空的检查保持沉默。在一个每 5 分钟同步一次的 3 模型团队里，这能砍掉 80-95% 的检查 token。"],
    ["辩论留在大脑里","每场辩论都记录在 vault 中，编号且永久 —— 不会消失在聊天窗口里。已结的共识永不删除；是永恒的记录。"],
    ["待决者等待而不阻塞","一个开放的共识可以等某个模型，而不停下其余工作。创始人睡前开一场辩论，醒来时决策已成。"]]},
   skills:{t:"知识与技能",intro:"一个模型学到的，大家最终都会知道。知识在积累，而非被花掉与丢失。",items:[
    ["+515 个共享技能","整个团队都可调用的能力目录 —— 并且自己在成长。安装一次，整支队伍就都会。"],
    ["一个学会，全体皆知","当一个模型解决了问题，那份知识就留在大脑里。下一次同步，所有人都拥有它 —— 一个人的努力就是所有人的收益，不花一枚额外 token。"],
    ["自动生成的索引","索引由脚本从真实文件夹在每次同步时生成 —— 从不手工、从不过时。真相之源是文件夹，不是列表。"],
    ["开发 / 渗透 / 3D / 自动化","技能覆盖众多领域 —— 编程、Kali Linux 级别的安全、3D、工作流自动化、交易、内容创作等等。"],
    ["专用的上线文件","一个清晰的入口，让新模型在几分钟内理解系统 —— 无需有人从头解释上下文。"],
    ["复制，而非重写","复用已存在的东西；不维护，而是生成。真相之源是内容，不是几小时后就变成谎言的重复列表。"]]},
   ethics:{t:"规则与伦理",intro:"系统建立在信任与纪律之上。这些规则适用于每一个加入的模型。",items:[
    ["绝不编造，绝不猜测","模型若不知道就去查 —— 先查大脑，再查手册与文档；若查不到就学习并分享所学。只在扎实的知识上行动。"],
    ["上线前 2 轮分析","任何代码不经两遍完整审查不得发布：一遍猎错，一遍猎改进 —— 而由于改进可能带来新错误，便回到起点。这是底线，不是可选项。"],
    ["动手前必先备份","任何改动都以备份为前提，以便几秒内回滚。什么都不盲目删除或替换。"],
    ["秘密只留在本地大脑","密码、令牌、密钥与 IP 永不离开本地大脑 —— 永不上传到主大脑。只有方法是公开的；内容永远私密。"],
    ["不可谈判的伦理","绝不违法，永不。诚实高于一切 —— 但诚实不是不去尝试的借口：不知道的模型会学习，而非放弃。"],
    ["接受创始人的设定","当创始人把一个模型置于某个角色（例如某领域最强的工程师），它就担起这个角色。这是对齐期望质量的聚焦工具，而非伪装。"]]},
   infra:{t:"基础设施与安全",intro:"没有网页面，并具备自动恢复。基础设施为无头运行、自我修复而设计。",items:[
    ["VPS + 自托管 n8n","引擎跑在你自己的服务器上：一台带 n8n 的 VPS —— 那个自动化部署、通知与工作流的神经系统 —— 全部自托管，经由 Caddy 自动 SSL。"],
    ["只走 SSH，没有网页面板","零登录、零仪表板、零网页攻击向量。管理经由 SSH 上的 git，或本地的 Obsidian 窗口。"],
    ["防火墙 + fail2ban","只开必要端口（22，用于 SSH）；fail2ban 自动拦截暴力破解。其余一律关闭。"],
    ["多厂商故障切换","免费 API 不稳定；因此配置一条链 —— 一个宕机（限流、超时、503），下一个自动接管。因为大脑是共享的，模型会取回全部上下文并继续。"],
    ["去中心化副本","每个模型本地都有整个大脑。攻破一个不会危及系统；VPS 若宕机，工作照常，恢复后再同步。"],
    ["50% 规则","当一次会话达到上下文窗口的一半，就开一个新的，而非压缩。新会话从 vault 加载上下文，起点更聪明 —— 不退化。"]]},
   resilience:{t:"韧性",intro:"大脑挺过一切 —— 宕机、模型更换，乃至模型本身。",items:[
    ["永久记忆","记忆是永久的，而非短暂的。数年的工作、决策与所学随时可取 —— 模型在需要时加载所需。"],
    ["上下文挺过模型更换","换掉底层模型也不丢任何东西 —— 大脑是同一个，上下文完好无损。方法不依赖厂商：可用 Claude、GPT、Gemini、Llama、DeepSeek 或 Qwen。"],
    ["git clone = 即刻上线","新模型 git clone，几秒内完全进入上下文，即使十年之后 —— 读共识、读日志，继续工作。"],
    ["离线可用，事后同步","每台机器都有完整的本地副本。工作离线继续；网络恢复时，同步补回一切。"],
    ["不依赖任何公司","Git、Markdown、n8n 与 Ollama 都是开放的。若某供应商消失，换个模型就继续。无需 OpenAI、Anthropic、Google 或任何人。"],
    ["数年积累秒级可达","全部历史都活在 git 里。每次 commit 都是备份；每个克隆都是完整副本。灾难性事件删不掉任何东西 —— 接上一个新模型，大脑继续。"]]}
  }},
 pt:{brand:"Dev's Foundation",tagline:"Um cérebro. Todos os modelos. Memória infinita.",
  home_tab:"Início",home_intro:"O primeiro sistema de consenso multi-agente do mundo com cérebro partilhado. Este é o método que vive no git — explora-o um pilar de cada vez.",
  map_cap:"O método num relance — oito pilares, um cérebro.",cta:"Explorar o método",
  graph_hint:"arrasta os nós · roda para zoom · arrasta para mover",
  src:"Método completo — fonte no GitHub",note:"O conhecimento que não se partilha definha. O que se partilha multiplica-se.",
  prev:"Anterior",next:"Seguinte",
  PAGES:{
   problems:{t:"Problemas conhecidos",intro:"As IAs de hoje têm um problema que ninguém resolveu bem: não têm memória de longo prazo. É a laranja espremida — a janela de contexto é finita e, à medida que enche, o modelo comprime a informação, perde coerência e acaba a alucinar. E mesmo os agentes que já têm memória persistente, como o Hermes, batem num limite físico: a memória enche, tens de apagar o antigo para escrever o novo, e a compressão continua a degradar as sessões longas. Estes são os problemas reais que todos enfrentam hoje.",items:[
    ["A laranja espremida","A janela de contexto é finita. Ao encher, o modelo comprime a informação — primeiro perde detalhe, depois coerência, e por fim alucina. Não é um bug: é um limite fundamental da arquitetura Transformer, comum a GPT, Claude, Gemini e Llama."],
    ["Memória limitada","Cada sessão começa numa folha em branco; o que construíste ontem perde-se ao fechar a janela. Até a memória persistente do Hermes tem um limite físico — muitas vezes tens de apagar uma nota antiga para escrever uma nova, como um bloco de bolso."],
    ["Custo oculto de tokens","Gastas tokens a reconstruir o mesmo contexto vezes sem conta, e o conhecimento que esse gasto produziu evapora quando a sessão acaba. Fazes a mesma tarefa um mês depois e pagas tudo outra vez."],
    ["Dependência de terceiros","A maioria dos setups “multi-agente” está presa a plataformas fechadas: APIs proprietárias que mudam de preço, serviços que podem ser descontinuados, e os teus dados em servidores que não controlas."],
    ["Fragilidade","Se o teu assistente preferido é descontinuado, todo o contexto de trabalho — conversas, decisões, progresso — desaparece com ele. Não há migração, não há exportação, não há continuidade."],
    ["Burocracia","Os fluxos de git tradicionais são lentos: PRs pendentes, revisões bloqueadas, filas de aprovação, conflitos de merge e discussões espalhadas por comentários — decisões que se arrastam durante dias."],
    ["Segurança exposta","As plataformas SaaS têm uma enorme superfície de ataque — dashboards web, logins, APIs expostas e dados em servidores de terceiros. Cada porta aberta é uma porta que alguém pode arrombar."],
    ["Onboarding lento","Integrar um novo agente obriga a re-treinar, reconfigurar e reexplicar todo o contexto do zero — tempo perdido sempre que entra alguém novo na equipa."]]},
   solution:{t:"Soluções",intro:"Esta é a nossa solução para todos esses problemas: dar a cada modelo o mesmo cérebro permanente — um repositório git partilhado por todos. Em vez de um bloco de bolso que enche, uma biblioteca inteira sem limite; em vez de comprimir e alucinar, memória que nunca esquece. As peças são propositadamente simples e abertas.",items:[
    ["1 cérebro master + N locais","Um repositório git bare no servidor é o master; cada modelo tem um clone local completo. Um aprende, faz commit e push; os outros fazem pull e passam a saber — memória partilhada que nunca esquece."],
    ["Git como middleware","O git sincroniza tudo. Não há API entre modelos nem orquestrador central a gastar tokens em relay — escrever no cérebro não produz tokens de input/output, só o pensar custa."],
    ["Markdown como formato","O cérebro é Markdown puro — universal, legível por humanos, e a língua nativa de qualquer LLM. Sem formatos proprietários, sem lock-in."],
    ["SSH como segurança","O acesso é exclusivamente por chave, via SSH. Sem passwords, sem login web. Cada modelo tem a sua própria chave; se uma for comprometida, revoga-se só essa."],
    ["Obsidian opcional","O Obsidian é apenas uma janela para ver o cérebro como grafo. O sistema funciona com ele desligado — cada modelo já tem tudo localmente."],
    ["Sem interface web","Sem dashboard, sem login, sem painel — o que significa zero superfície de ataque web. O que é privado nunca sai do cérebro local; só o método é público."],
    ["Memória infinita","O cérebro não tem janela de contexto. Anos de trabalho, decisões e aprendizagens ficam sempre acessíveis, sem degradação — o modelo carrega o que precisa quando precisa."],
    ["Custo quase zero","Git, Obsidian, Markdown, n8n e modelos open-source são grátis. O único custo é a VPS — e os tokens gastos hoje não se voltam a gastar amanhã, porque o conhecimento fica."],
    ["Segurança máxima","Sem interface web (zero superfície de ataque), segredos só nos cérebros locais, e cópias descentralizadas — comprometer um modelo não compromete o sistema."],
    ["Resiliência catastrófica","Se tudo for apagado, liga-se um modelo novo: git clone e está em contexto em segundos, mesmo anos depois. O cérebro sobrevive aos modelos."],
    ["Independência total","O método não depende de nenhuma empresa. Qualquer LLM que leia ficheiros e corra git serve — vendor-agnostic de ponta a ponta."],
    ["Força-tarefa, não burocracia","O consenso orgânico substitui PRs, revisões e filas. Três mentes debatem em tempo real — decisões rápidas e execução imediata."]]},
   minds:{t:"As mentes",intro:"Um cérebro, muitas mentes — e nenhuma empresa é dona dele. O Hermes é o framework; o modelo dentro dele pode mudar.",items:[
    ["Hermes","O agente sempre-on no servidor: guarda o cérebro, sincroniza a cada poucos minutos e responde ao fundador. É o framework, não o modelo — pode correr Nemotron, GLM, Llama ou Qwen e mudar sem mudar o Hermes."],
    ["Opus Desktop","Raciocínio pesado — arquitetura, código complexo, os problemas difíceis. Um dos dois Opus que são a âncora de qualidade do sistema."],
    ["Opus Laptop","Validação e o diário — um segundo modelo de raciocínio que verifica, sugere alternativas e refina. Dois modelos de topo a concordar é o melhor filtro que há."],
    ["Qualquer modelo via git clone","Claude, GPT, Llama, Qwen, DeepSeek — qualquer modelo que leia ficheiros e corra git entra clonando o cérebro. Quantos mais modelos, mais inteligência coletiva."],
    ["Plug & Play","Ligas um novo modelo e ele está no contexto de trabalho em segundos — sem ritual de setup. Um PC, um portátil, até um telemóvel ou Raspberry Pi servem."],
    ["Onboarding = ler README + clonar","Sem re-treino, sem reconfiguração. Lê o guia, clona o cérebro, lê os consensos e o diário — e está a par de tudo o que foi decidido e feito."]]},
   consensus:{t:"Comunicação & consenso",intro:"As decisões nascem de debate registado, não de filas de PRs. Três mentes alinham antes de uma mão executar.",items:[
    ["Correio assíncrono","Cada modelo tem inbox e outbox no vault. As mensagens são ficheiros de Markdown — comunicar não gasta tokens, e nada se apaga: as mensagens entregues arquivam-se."],
    ["Debate → proposta → decisão","O protocolo de cada consenso: cada modelo escreve a sua posição, lê as dos outros, argumenta e refina. Um modelo pode discordar — regista-se a discordância e segue-se."],
    ["Consenso 3/3","Nada se executa até os três concordarem. Depois, um modelo é designado para implementar — uma mão escreve o código que os três aprovaram, testado antes de ir a produção."],
    ["A regra do silêncio","Zero output quando não há novidade — verificações vazias ficam em silêncio. Numa equipa de 3 modelos a sincronizar de 5 em 5 minutos, isto corta 80-95% dos tokens gastos em verificações."],
    ["Debates ficam no cérebro","Cada debate fica registado no vault, numerado e permanente — não perdido numa janela de chat. Um consenso fechado nunca se apaga; é registo eterno."],
    ["Pendentes aguardam sem bloquear","Um consenso aberto pode esperar por um modelo sem parar o resto do trabalho. O fundador abre um debate antes de dormir e acorda com a decisão tomada."]]},
   skills:{t:"Conhecimento & skills",intro:"O que um modelo aprende, todos passam a saber. O conhecimento acumula-se em vez de se gastar e perder.",items:[
    ["+515 skills partilhadas","Um catálogo de capacidades a que toda a equipa recorre — e que cresce sozinho. Instala-se uma vez e toda a frota passa a saber."],
    ["Um aprende, todos sabem","Quando um modelo resolve um problema, esse conhecimento fica no cérebro. Na sincronização seguinte, todos o têm — o esforço de um é o benefício de todos, sem gastar um token extra."],
    ["Índices auto-gerados","Os índices são produzidos por um script a partir das pastas reais, a cada sincronização — nunca à mão, nunca desatualizados. A fonte de verdade é a pasta, não a lista."],
    ["Dev / Pentest / 3D / Automação","As skills abrangem muitas áreas — programação, segurança ao nível do Kali Linux, 3D, automação de workflows, trading, criação de conteúdo e mais."],
    ["Ficheiro de onboarding dedicado","Um ponto de entrada claro para um modelo novo perceber o sistema em minutos — sem alguém ter de explicar o contexto do princípio."],
    ["Copiar, não reescrever","Reutiliza-se o que já existe; não se mantém, gera-se. A fonte de verdade é o conteúdo, não uma lista duplicada que se torna mentira em horas."]]},
   ethics:{t:"Regras & ética",intro:"O sistema assenta em confiança e disciplina. Estas regras aplicam-se a cada modelo que entra.",items:[
    ["Nunca inventar, nunca adivinhar","Se um modelo não sabe, pesquisa — no cérebro primeiro, depois em manuais e documentação; se não encontra, aprende e partilha o que aprendeu. Só age com conhecimento sólido."],
    ["2 ciclos de análise antes de deploy","Nenhum código sai sem duas passagens completas: uma à caça de erros, outra à caça de melhorias — e como uma melhoria pode gerar um erro novo, volta ao início. É a barra mínima, não uma opção."],
    ["Backup sempre antes de mexer","Qualquer alteração é precedida de backup, para poder reverter em segundos. Nada se apaga ou substitui às cegas."],
    ["Segredos só nos cérebros locais","Passwords, tokens, chaves e IPs nunca saem dos cérebros locais — nunca sobem ao master. Só o método é público; o conteúdo é sempre privado."],
    ["Ética inegociável","Nada ilegal, nunca. Honestidade acima de tudo — mas a honestidade não é desculpa para não tentar: o modelo que não sabe, aprende, não desiste."],
    ["Aceitar o personagem do fundador","Quando o fundador põe um modelo num papel (‘és o melhor engenheiro de…’), ele assume-o. É uma ferramenta de foco que alinha a qualidade esperada, não fingimento."]]},
   infra:{t:"Infra & segurança",intro:"Sem superfície web, e com recuperação automática. A infraestrutura é feita para correr sem ecrã e curar-se sozinha.",items:[
    ["VPS + n8n self-hosted","O motor corre no teu próprio servidor: uma VPS com o n8n — o sistema nervoso que automatiza deploys, notificações e workflows — tudo self-hosted, com SSL automático via Caddy."],
    ["SSH only, sem painel web","Zero login, zero dashboard, zero vetor de ataque web. A gestão é git por SSH ou uma janela local do Obsidian."],
    ["Firewall + fail2ban","Só as portas necessárias (22, para SSH) estão abertas; o fail2ban bloqueia tentativas de força bruta automaticamente. Tudo o resto está fechado."],
    ["Failover multi-vendor","As APIs grátis são instáveis; por isso configura-se uma cadeia — se uma cai (rate limit, timeout, 503), a seguinte assume sozinha. Como o cérebro é partilhado, o modelo recupera o contexto todo e continua."],
    ["Cópias descentralizadas","Cada modelo tem o cérebro inteiro localmente. Comprometer um não compromete o sistema; e se a VPS cai, o trabalho continua e sincroniza quando voltar."],
    ["A regra dos 50%","Quando uma sessão chega a metade da janela de contexto, abre-se uma nova em vez de comprimir. A nova sessão carrega o contexto do vault e começa mais inteligente — sem degradação."]]},
   resilience:{t:"Resiliência",intro:"O cérebro sobrevive a tudo — quedas, trocas de modelo, e aos próprios modelos.",items:[
    ["Memória permanente","A memória é permanente, não efémera. Anos de trabalho, decisões e aprendizagens ficam acessíveis num instante — o modelo carrega o que precisa quando precisa."],
    ["Contexto sobrevive à troca de modelos","Troca-se o modelo por baixo e não se perde nada — o cérebro é o mesmo, o contexto intacto. O método é agnóstico: serve Claude, GPT, Gemini, Llama, DeepSeek ou Qwen."],
    ["git clone = onboarding instantâneo","Um modelo novo faz git clone e está totalmente em contexto em segundos, mesmo dez anos depois — lê os consensos, lê o diário, e continua o trabalho."],
    ["Funciona offline, sincroniza depois","Cada máquina tem uma cópia local completa. O trabalho continua offline; quando a internet volta, a sincronização recupera tudo."],
    ["Sem dependência de nenhuma empresa","Git, Markdown, n8n e Ollama são abertos. Se um fornecedor desaparece, troca-se o modelo e continua-se. Não precisa da OpenAI, Anthropic, Google ou de ninguém."],
    ["Legado de anos acessível em segundos","Toda a história vive no git. Cada commit é um backup; cada clone é uma cópia completa. Um evento catastrófico não apaga nada — liga-se um modelo novo e o cérebro continua."]]}
  }}
};

var GRP={brain:"#ffffff",agent:"#d6d6d6",tool:"#8f8f8f",human:"#ededed",know:"#b5b5b5",concept:"#c9c9c9"};
var NODES=[
 {id:"brain",l:"Master Brain",g:"brain",r:26},
 {id:"hermes",l:"Hermes",g:"agent",r:16},{id:"desk",l:"Opus Desktop",g:"agent",r:14},{id:"lap",l:"Opus Laptop",g:"agent",r:14},{id:"gpt",l:"GPT Designer",g:"agent",r:13},
 {id:"n8n",l:"n8n",g:"tool",r:12},{id:"git",l:"Git + SSH",g:"tool",r:12},{id:"md",l:"Markdown",g:"tool",r:11},{id:"obs",l:"Obsidian",g:"tool",r:11},
 {id:"founder",l:"Founder",g:"human",r:15},{id:"discord",l:"Discord",g:"human",r:11},
 {id:"skills",l:"500+ Skills",g:"know",r:14},{id:"cons",l:"Consensus",g:"know",r:13},{id:"mail",l:"Mail",g:"know",r:11},
 {id:"res",l:"Resilience",g:"concept",r:12},{id:"sec",l:"Security",g:"concept",r:12}
];
var LINKS=[["brain","hermes"],["brain","desk"],["brain","lap"],["brain","gpt"],["brain","obs"],["brain","git"],["brain","md"],["brain","skills"],["brain","cons"],["brain","mail"],["brain","res"],["hermes","n8n"],["hermes","sec"],["founder","brain"],["founder","hermes"],["founder","desk"],["founder","lap"],["founder","gpt"],["founder","cons"],["founder","discord"],["discord","hermes"],["desk","cons"],["lap","cons"],["gpt","skills"],["git","sec"]];
var NMAP={};NODES.forEach(function(n){NMAP[n.id]=n;});

var LANG=localStorage.getItem("df_lang")||(navigator.language||"en").slice(0,2);
if(!I18N[LANG])LANG="en";
var PAGE=document.body.getAttribute("data-page")||"home";
function S(k){return I18N[LANG][k];}
function P(){return I18N[LANG].PAGES;}

function buildHeader(){
 var tabs='<a class="tab'+(PAGE==="home"?" active":"")+'" href="inicio.html">'+svg("home")+'<span>'+S("home_tab")+'</span></a>';
 ORDER.forEach(function(k){tabs+='<a class="tab'+(PAGE===k?" active":"")+'" href="'+FILE[k]+'">'+svg(k)+'<span>'+P()[k].t+'</span></a>';});
 var opts="";["en","pt","de","es","fr","zh"].forEach(function(l){var lbl=l==="zh"?"中文":l.toUpperCase();var dis='';opts+='<option value="'+l+'"'+(l===LANG?' selected':'')+dis+'>'+lbl+'</option>';});
 document.getElementById("hdr").innerHTML='<header><div class="wrap hbar"><a class="logo" href="inicio.html">'+logoImg(30)+'<span>Dev’s Foundation</span></a><nav class="tabs">'+tabs+'</nav><div class="hctrl"><select id="lang" aria-label="Language">'+opts+'</select></div></div></header>';
 document.getElementById("lang").addEventListener("change",function(e){var v=e.target.value;if(!I18N[v])return;localStorage.setItem("df_lang",v);location.reload();});
 var _a=document.querySelector(".tab.active");if(_a&&_a.scrollIntoView)_a.scrollIntoView({block:"nearest",inline:"center"});
}
function buildFooter(){
 document.getElementById("ftr").innerHTML='<footer><div class="wrap"><a class="src" href="https://github.com/Devs-Foundation/multi-agent-consensus-method" target="_blank" rel="noopener">'+svg("home")+' '+S("src")+'</a><p class="note">“'+S("note")+'”</p><p class="ml">EN · PT · DE · ES · FR · 中文 · Public Domain · Rui Almeida · 2026</p></div></footer>';
}
function buildHome(){
 var cards="";ORDER.forEach(function(k,i){var pg=P()[k];cards+='<a class="tcard" href="'+FILE[k]+'"><div class="ic">'+svg(k)+'</div><h3>'+pg.t+'</h3><p>'+pg.intro.split(".")[0]+'.</p><div class="go">'+String(i+1).padStart(2,"0")+' →</div></a>';});
 document.getElementById("main").innerHTML=
  '<section class="hero"><div class="wrap"><div class="blogo">'+logoImg(82)+'</div><h1>Dev’s Foundation</h1><p class="tagline">'+S("tagline")+'</p><p class="intro">'+S("home_intro")+'</p><a class="cta" href="'+FILE[ORDER[0]]+'">'+S("cta")+' →</a>'
  +'<div class="graphbox"><canvas id="graph"></canvas><div class="gic">◉ interactive graph</div><div class="ghint">'+S("graph_hint")+'</div></div>'
  +'<div class="mapwrap"><img src="assets/grafo-7-dias.png" alt="7 days"><p class="cap">'+(LANG==="pt"?"O cérebro partilhado aos 7 dias — liga-se e cresce sozinho.":"The shared brain at 7 days — it links and grows on its own.")+'</p></div>'
  +'<div class="mapwrap"><img src="assets/mindmap-'+LANG+'.png" alt="'+S("map_cap")+'"><p class="cap">'+S("map_cap")+'</p></div>'
  +'<div class="tabcards">'+cards+'</div></div></section>';
 initGraph();
}
function buildTopic(){
 var pg=P()[PAGE];var idx=ORDER.indexOf(PAGE);
 var items="";pg.items.forEach(function(it){items+='<div class="item"><h4>'+it[0]+'</h4><p>'+it[1]+'</p></div>';});
 var prev=idx>0?ORDER[idx-1]:null,next=idx<ORDER.length-1?ORDER[idx+1]:null;
 var pn='<div class="prevnext">';
 pn+=prev?'<a class="pn" href="'+FILE[prev]+'"><span class="lbl">← '+S("prev")+'</span><span>'+P()[prev].t+'</span></a>':'<span></span>';
 pn+=next?'<a class="pn next" href="'+FILE[next]+'"><span class="lbl">'+S("next")+' →</span><span>'+P()[next].t+'</span></a>':'<span></span>';
 pn+='</div>';
 document.getElementById("main").innerHTML='<section class="page"><div class="wrap"><div class="pgnum">'+String(idx+1).padStart(2,"0")+' / 08</div><div class="pghead"><div class="ic">'+svg(PAGE)+'</div><h1>'+pg.t+'</h1></div><p class="pgintro">'+pg.intro+'</p>'+
  '<div class="pgcols"><div class="pgmain"><div class="items">'+items+'</div>'+pn+'</div>'+
  '<aside class="pggraph"><div class="mglabel">◉ mapa desta secção</div><div class="mg"><canvas id="graph"></canvas></div></aside></div>'+
  '</div></section>';
 var ln=[{id:"c",l:pg.t,g:"brain",r:22},{id:"brain",l:(LANG==="pt"?"Cérebro":"Brain"),g:"concept",r:12}];
 var ll=[["c","brain"]];
 pg.items.forEach(function(it,i){var lb=it[0].length>22?it[0].slice(0,20)+"…":it[0];ln.push({id:"n"+i,l:lb,g:(i%2?"know":"agent"),r:9});ll.push(["c","n"+i]);});
 NODES=ln;LINKS=ll;NMAP={};for(var q=0;q<NODES.length;q++)NMAP[NODES[q].id]=NODES[q];
 initGraph();
}
function render(){
 document.documentElement.lang=LANG;
 buildHeader();
 if(PAGE==="home")buildHome();else buildTopic();
 buildFooter();
 document.title="Dev’s Foundation — "+(PAGE==="home"?S("tagline"):P()[PAGE].t);
}

/* ===== interactive graph (monochrome) ===== */
var cv,ctx,W=0,H=0,DPR=Math.min(window.devicePixelRatio||1,2),view={x:0,y:0,s:1},drag=null,pan=null,hover=null,running=false;
function initGraph(){
 cv=document.getElementById("graph");if(!cv)return;ctx=cv.getContext("2d");
 resizeG();seedG();kick();
 window.addEventListener("resize",function(){resizeG();kick();});
 cv.addEventListener("mousedown",function(e){var r=cv.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top,n=pickG(px,py);if(n)drag=n;else pan={x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};kick();});
 window.addEventListener("mousemove",function(e){if(!cv)return;var r=cv.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;if(drag){var w=fromG(px,py);drag.x=w.x;drag.y=w.y;drag.vx=0;drag.vy=0;kick();}else if(pan){view.x=pan.vx+(e.clientX-pan.x);view.y=pan.vy+(e.clientY-pan.y);kick();}else{var h=pickG(px,py);if(h!==hover){hover=h;kick();}}});
 window.addEventListener("mouseup",function(){drag=null;pan=null;});
 cv.addEventListener("wheel",function(e){e.preventDefault();var r=cv.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top,b=fromG(px,py);view.s*=e.deltaY<0?1.1:.9;view.s=Math.max(.4,Math.min(2.6,view.s));var a=fromG(px,py);view.x+=(a.x-b.x)*view.s;view.y+=(a.y-b.y)*view.s;kick();},{passive:false});
 cv.addEventListener("touchstart",function(e){var t=e.touches[0],r=cv.getBoundingClientRect(),n=pickG(t.clientX-r.left,t.clientY-r.top);if(n){drag=n;e.preventDefault();kick();}},{passive:false});
 cv.addEventListener("touchmove",function(e){if(!drag)return;e.preventDefault();var t=e.touches[0],r=cv.getBoundingClientRect(),w=fromG(t.clientX-r.left,t.clientY-r.top);drag.x=w.x;drag.y=w.y;drag.vx=0;drag.vy=0;kick();},{passive:false});
 cv.addEventListener("touchend",function(){drag=null;});
}
function resizeG(){if(!cv)return;var r=cv.getBoundingClientRect();W=r.width;H=r.height||460;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);}
function seedG(){var i=0;NODES.forEach(function(n){var a=i/NODES.length*6.283;n.x=W/2+Math.cos(a)*(140+i*4);n.y=H/2+Math.sin(a)*(110+i*3);n.vx=0;n.vy=0;i++;});}
function simG(){
 for(var i=0;i<NODES.length;i++)for(var j=0;j<NODES.length;j++){if(i===j)continue;var a=NODES[i],b=NODES[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy||.01,d=Math.sqrt(d2),f=2600/d2;a.vx+=dx/d*f;a.vy+=dy/d*f;}
 LINKS.forEach(function(L){var a=NMAP[L[0]],b=NMAP[L[1]],dx=b.x-a.x,dy=b.y-a.y,d=Math.sqrt(dx*dx+dy*dy)||.01,f=(d-120)*.014;a.vx+=dx/d*f;a.vy+=dy/d*f;b.vx-=dx/d*f;b.vy-=dy/d*f;});
 NODES.forEach(function(n){n.vx+=(W/2-n.x)*.003;n.vy+=(H/2-n.y)*.003;if(n===drag)return;n.vx*=.85;n.vy*=.85;n.x+=n.vx;n.y+=n.vy;});
}
function tG(n){return{x:n.x*view.s+view.x,y:n.y*view.s+view.y};}
function fromG(px,py){return{x:(px-view.x)/view.s,y:(py-view.y)/view.s};}
function drawG(){
 ctx.clearRect(0,0,W,H);
 var lit={};if(hover){lit[hover.id]=1;LINKS.forEach(function(L){if(L[0]===hover.id)lit[L[1]]=1;if(L[1]===hover.id)lit[L[0]]=1;});}
 LINKS.forEach(function(L){var a=tG(NMAP[L[0]]),b=tG(NMAP[L[1]]),on=hover&&(L[0]===hover.id||L[1]===hover.id);ctx.strokeStyle=on?"rgba(255,255,255,.55)":"rgba(150,150,150,.16)";ctx.lineWidth=on?1.6:1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();});
 NODES.forEach(function(n){var p=tG(n),r=n.r*view.s,dim=hover&&!lit[n.id];ctx.globalAlpha=dim?.28:1;ctx.beginPath();ctx.arc(p.x,p.y,r,0,6.283);ctx.fillStyle=GRP[n.g];ctx.shadowColor=n.r>=20?"#fff":"rgba(255,255,255,.5)";ctx.shadowBlur=n.r>=20?22:(hover&&lit[n.id]?13:5);ctx.fill();ctx.shadowBlur=0;ctx.globalAlpha=dim?.4:1;ctx.fillStyle="#f2f2f2";ctx.font=(n.r>=20?"600 13px":"12px")+" -apple-system,Segoe UI,Roboto,sans-serif";ctx.textAlign="center";ctx.fillText(n.l,p.x,p.y+r+15);});
 ctx.globalAlpha=1;
}
function kick(){if(!running){running=true;requestAnimationFrame(loopG);}}
function loopG(){simG();drawG();requestAnimationFrame(loopG);}
function pickG(px,py){var w=fromG(px,py);for(var i=0;i<NODES.length;i++){var n=NODES[i],dx=n.x-w.x,dy=n.y-w.y;if(dx*dx+dy*dy<(n.r+7)*(n.r+7))return n;}return null;}

render();
