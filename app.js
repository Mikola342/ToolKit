const STORAGE_KEY='coretoolkit-site-v1';
const seed={
  version:1,
  directions:{
    sw:{id:'sw',workStatus:'active',name:'SolidWorks',icon:'◈',status:'Стабилизация',stage:'Стабилизация',summary:'38 публичных функций. Реализованы вставка компонентов и ограниченный набор сопряжений через прямой COM API. Последняя живая проверка на SolidWorks 2025 SP5 прошла успешно.',functionCount:38,liveAcceptedCount:20,functions:['insert_component()','list_mates()','add_mate()'],tests:'407 unit-тестов и 20 интеграционных тестов — OK, без пропусков. Живые проверки insert_component, list_mates и add_mate на SolidWorks 2025 SP5 прошли. SHA-256 исходных файлов совпали.',liveStatus:'accepted_partial',liveNotes:'Последний пакет insert_component / list_mates / add_mate прошёл живую проверку на SolidWorks 2025 SP5. Ранее сохранённые 17 живых сценариев также сохранены. Необходимо отдельно проверить вложенные подсборки SLDASM. Диагностика EntityParams остаётся недоступной.',limitations:['Запись выполняется только в новые сборки.','Вставка компонентов ограничена файлами SLDPRT.','Поддержано одно плоское совпадение между закреплённым и свободным экземпляром.','Автоматический rollback не реализован.','Диагностика EntityParams недоступна.'],open:['Исправить использование устаревших модулей из build/ при обычной pip-сборке.','Проверить вставку вложенных подсборок SLDASM.','Выяснить причину недоступности EntityParams.','Определить безопасную стратегию rollback для операций записи.'],next:'Сначала исправить stale build/ modules в обычной pip-сборке и проверить чистую установку. Затем провести живой тест вставки вложенных SLDASM, не меняя другие CAD-направления.',promptNotes:'Продолжай с SolidWorks. Приоритет — исправление stale build/ modules в обычной pip-сборке, затем живые проверки вложенных SLDASM. Сохраняй ограничения записи только в новые сборки и текущую ограниченную поддержку сопряжений.',updated:'2026-11-18T18:54:32+00:00',liveLabel:'Частично принята',testsLabel:'407 unit + 20 integration'},
    kompas:{id:'kompas',workStatus:'paused',resumeStage:'Живая приёмка',name:'КОМПАС-3D',icon:'⬡',status:'Живая приёмка частично завершена',stage:'Пауза',summary:'Реализовано 13 функций. Все целевые и общие автоматические тесты пройдены, но реальная проверка 12 функций пока заблокирована ошибкой ROT 0x800401E3.',functionCount:13,liveAcceptedCount:1,functions:['inspect_part_copy()','list_features()','list_sketches()','list_variables()','get_feature()','list_feature_parameters()','list_sketch_entities()','list_sketch_constraints()','get_sketch_status()','list_bodies()','get_material()','get_sketch()','list_sketch_variables()'],tests:'159/159 целевых тестов и 482/482 общих тестов пройдены. COM-mock/unit проверки не заменяют живую приёмку.',liveStatus:'blocked',liveNotes:'Живую приёмку прошла только inspect_part_copy(). Остальные 12 функций подтверждены unit-тестами и COM-двойниками, но ещё не проверены на реальном процессе КОМПАС-3D. Запуск/получение активного приложения через ROT возвращает 0x800401E3. Приоритет — запустить КОМПАС v25 и выполнить пакетную живую приёмку, особенно сценарии чтения эскизов.',limitations:['Только inspect_part_copy() прошла живую приёмку.','Для остальных 12 функций нет подтверждения на реальном процессе КОМПАС-3D.','Текущая блокировка ROT 0x800401E3 не позволяет выполнить живые проверки.','Запись переменных и перестроение модели не входят в текущий read-only этап.'],open:['Почему ROT возвращает 0x800401E3 и как корректно получить активный экземпляр КОМПАС v25?','Провести живые проверки list_features(), list_sketches() и list_variables().','Проверить все 12 ожидающих функций на реальной модели и read-only копии.','После приёмки расширить API типизированными параметрами, примитивами, ограничениями и измерениями/калибровкой.'],next:'Устранить блокировку ROT 0x800401E3, запустить КОМПАС v25 и пакетно проверить все 12 ожидающих функций на реальных документах. В первую очередь — read-сеансы эскизов. После этого перейти к следующему пакету типизированных параметров, примитивов, ограничений и измерений.',promptNotes:'Продолжай только направление КОМПАС-3D. Не считай COM-mock доказательством живой приёмки. Сначала устрани ROT 0x800401E3 и выполни реальные проверки 12 функций; не реализуй запись переменных или перестроение без отдельного задания.',updated:'2026-11-18T18:48:26+00:00',liveLabel:'Заблокирована: 12 ожидают',testsLabel:'482 / 482'},
    mathcad:{id:'mathcad',workStatus:'paused',resumeStage:'Блокировка COM',name:'Mathcad',icon:'∑',status:'Ожидает устранения блокировки',stage:'Пауза',summary:'Офлайн-основа Mathcad Prime готова: диагностика окружения, проверка SDK и чтение .mcdx без COM. Рабочая COM-активация и живой адаптер пока не подтверждены.',functionCount:null,liveAcceptedCount:0,functions:['probe_environment()','inspect_mcdx()','diagnostics / contracts / reader','mock adapter','registry и SDK probe'],tests:'41 автономный тест пройден; wheel собирается и устанавливается. Ранее полный прогон: 180 тестов, 31 failure и 32 error (pywin32 / cad-run). Эти сбои требуют отдельной проверки после устранения окружения.',liveStatus:'blocked',liveNotes:'Установлен Mathcad Prime 12.0.0.1 и обнаружены файлы SDK, но COM-регистрация неполная. Живые GetVersion(), проверка лицензии, OpenEx, Input/Output, пересчёт и сохранение не подтверждены. Пользователь ещё не подтвердил, что COM-регистрация исправлена.',limitations:['Рабочий COM-адаптер не подтверждён.','COM-регистрация неполная; активация ранее завершалась 0x80040154.','GetVersion(), лицензия, OpenEx, Input/Output, recalculation и save не прошли живую проверку.','Полный тестовый прогон имеет известные сбои pywin32 / cad-run; не смешивать их с 41 автономным тестом foundation.'],open:['Подтвердить, исправлена ли COM-регистрация Mathcad Prime 12.0.0.1.','Проверить активацию через официальный ApplicationCreator и GetVersion().','На доверенной копии проверить OpenEx, Input/Output, пересчёт и сохранение.','Разобрать 31 failure и 32 error полного прогона после проверки среды и SDK.'],next:'Сначала подтвердить состояние COM-регистрации. Если активация восстановлена — выполнить живой probe через официальный ApplicationCreator: GetVersion(), затем OpenEx доверенной копии и тесты Input/Output. После этого проверить пересчёт и сохранение.',promptNotes:'Продолжай только Mathcad. Не считай наличие Prime и SDK подтверждением COM-работоспособности. До успешного ApplicationCreator/GetVersion не заявляй о готовом COM-адаптере. Работай на доверенной копии документа и сохраняй изоляцию направления.',updated:'2026-11-18T12:39:15+00:00',liveLabel:'COM заблокирован',testsLabel:'41 автономный тест'}
  },
  history:[
    {date:'2026-11-19T12:00:00+00:00',system:'kompas',title:'КОМПАС-3D: работа временно приостановлена',description:'Разработка КОМПАС-3D временно приостановлена. Реализованные 13 функций, результаты 159/159 целевых и 482/482 общих тестов, ограничения и блокировка ROT 0x800401E3 сохранены без изменений.',changes:['Работа временно приостановлена','Технические результаты сохранены','Возобновление — по отдельному заданию']},
    {date:'2026-11-19T12:00:00+00:00',system:'mathcad',title:'Mathcad: работа временно приостановлена',description:'Разработка Mathcad временно приостановлена. Офлайн-основа, 41 автономный тест, сведения о COM-регистрации, ограничения и незавершённые проверки сохранены без изменений.',changes:['Работа временно приостановлена','Технические результаты сохранены','Возобновление — по отдельному заданию']},
    {date:'2026-11-18T18:54:32+00:00',system:'sw',title:'SolidWorks: живая приёмка нового пакета',description:'insert_component, list_mates и add_mate проверены на SolidWorks 2025 SP5. 407 unit + 20 integration — OK; SHA-256 исходников совпали.',changes:['3 функции проверены на реальном API','407 unit + 20 integration','Ограничения записи сохранены']},
    {date:'2026-11-18T18:48:26+00:00',system:'kompas',title:'КОМПАС-3D: пакет из 13 функций',description:'159/159 целевых и 482/482 общих тестов пройдены. Живую приёмку прошла только inspect_part_copy(); 12 функций ожидают проверки из-за ROT 0x800401E3.',changes:['13 функций реализовано','12 функций ожидают live acceptance','ROT 0x800401E3']},
    {date:'2026-11-18T12:39:15+00:00',system:'mathcad',title:'Mathcad: офлайн-основа и диагностика COM',description:'41 автономный тест пройден. Prime 12.0.0.1 и SDK обнаружены, но COM-регистрация неполная; подтверждения исправления пока нет.',changes:['41 автономный тест','COM 0x80040154','Живой probe ожидает']},
    {date:'2026-11-18T12:20:30+00:00',system:'all',title:'Зафиксированы архитектурные правила CoreToolkit',description:'Все направления развиваются как независимые наборы переиспользуемых native API-функций в собственном toolkit. MCP-репозитории используются только как справочные источники.',changes:['Без MCP-серверов и runtime-зависимостей','Изоляция CAD-направлений','Обязательны тесты и живая приёмка','Вести журнал работ']}
  ]
};
let state=loadState();let selected='sw';let activeView='overview';let editingId=null;let toastTimer=null;
const $=id=>document.getElementById(id);
function clone(x){return JSON.parse(JSON.stringify(x))}
function applyFocusPolicy(data){
  const now=new Date().toISOString();
  for(const id of ['sw','kompas','mathcad']){
    const d=data.directions?.[id];
    if(!d)continue;
    if(!d.workStatus){
      d.workStatus=id==='sw'?'active':'paused';
      if(id!=='sw'){
        d.resumeStage=d.stage||'Реализация';
        d.stage='Пауза';
        d.updated=now;
        data.history.unshift({
          date:now,
          system:id,
          title:d.name+': работа временно приостановлена',
          description:'Направление переведено на паузу. Ранее подтверждённые функции, тесты, ограничения и незавершённые проверки сохранены.',
          changes:['Работа временно приостановлена','Технические результаты сохранены','Возобновление — по отдельному заданию']
        });
      }
    }
  }
  return data;
}
function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed=JSON.parse(raw);
      if(parsed&&parsed.directions&&parsed.history)return applyFocusPolicy(parsed);
    }
  }catch(e){}
  return applyFocusPolicy(clone(seed));
}

function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));$('storageLabel').textContent='Локальное сохранение включено'}catch(e){$('storageLabel').textContent='Экспортируй резервную копию';toast('Не удалось сохранить в браузере. Используй экспорт JSON.')}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function lines(s){return (s||[]).map(x=>String(x).trim()).filter(Boolean)}
function splitLines(v){return String(v||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean)}
function dateLabel(v){const d=new Date(v);if(Number.isNaN(d.getTime()))return '—';return new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(d)}
function workStatusClass(d){return d.workStatus==='paused'?'paused':'focus'}
function workStatusLabel(d){return d.workStatus==='paused'?'Временно приостановлено':'Активный фокус'}
function liveStatusClass(d){
  if(d.liveStatus==='accepted')return 'ok';
  if(d.liveStatus==='blocked')return 'block';
  if(d.liveStatus==='accepted_partial')return 'ok';
  return 'warn';
}
function nextStepText(d){
  if(d.workStatus==='paused')return 'РАБОТА ПРИОСТАНОВЛЕНА. Не выполнять этот шаг без отдельного задания. Шаг при возобновлении: '+d.next;
  return d.next;
}

function liveLabel(d){return ({accepted:'Принята',accepted_partial:'Частично принята',pending:'Ожидает проверки',blocked:'Заблокирована',not_started:'Не начиналась'})[d.liveStatus]||'Не указано'}
function toast(msg){const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}
function nav(view){activeView=view;document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===view));document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+view));$('pageTitle').textContent=({overview:'Панель разработки',directions:'Направления разработки',history:'История изменений'})[view];$('pageSubtitle').textContent=({overview:'Единое рабочее состояние трёх изолированных CAD-направлений: реализация, тесты, живая приёмка и продолжение работы.',directions:'Фильтры, подробные карточки и формы обновления состояния каждого направления.',history:'Хронология подтверждённых результатов и всех изменений, внесённых через этот сайт.'})[view];if(view==='directions')renderDirections();if(view==='history')renderHistory()}
document.querySelectorAll('.nav button').forEach(b=>b.addEventListener('click',()=>nav(b.dataset.view)));
function renderStats(){
  const dirs=Object.values(state.directions);
  const paused=dirs.filter(d=>d.workStatus==='paused').length;
  const sw=state.directions.sw;
  $('stats').innerHTML=`
    <div class="stat"><div class="stat-label">Направлений</div><div class="stat-value">03</div><div class="stat-foot">1 активное · ${paused} на паузе</div></div>
    <div class="stat"><div class="stat-label">Активный фокус</div><div class="stat-value stat-accent">SolidWorks</div><div class="stat-foot">${sw.functionCount||sw.functions.length} функций в реестре</div></div>
    <div class="stat"><div class="stat-label">Проверки SolidWorks</div><div class="stat-value">407 + 20</div><div class="stat-foot">unit + integration · успешно</div></div>
    <div class="stat"><div class="stat-label">Открытые вопросы SW</div><div class="stat-value">${sw.open.length}</div><div class="stat-foot">Включая pip-сборку и SLDASM</div></div>`;
}

function cardHTML(d){
  const count=d.functionCount??d.functions.length;
  const metric=d.id==='sw'?'407 + 20':d.id==='kompas'?'482 / 482':'41';
  const metricLabel=d.id==='sw'?'unit + integration':d.id==='kompas'?'автотестов':'автономных тестов';
  const paused=d.workStatus==='paused';
  return `<article class="system-card ${paused?'is-paused':''}">
    <div class="card-top">
      <div class="sys-icon">${d.icon}</div>
      <span class="status-pill ${workStatusClass(d)}">${esc(workStatusLabel(d))}</span>
    </div>
    <h3 class="sys-title">${esc(d.name)}</h3>
    <div class="sys-meta">Этап: ${esc(d.stage)} · Живая приёмка: ${esc(liveLabel(d))}</div>
    <p class="card-summary">${esc(d.summary)}</p>
    <div class="mini-grid">
      <div class="mini"><strong>${d.id==='mathcad'?'Foundation':count}</strong><span>${d.id==='mathcad'?'офлайн-основа':'функций в реестре'}</span></div>
      <div class="mini"><strong>${metric}</strong><span>${metricLabel}</span></div>
    </div>
    <div class="card-footer">
      <span class="muted" style="font-size:10px">Обновлено ${dateLabel(d.updated).split(',')[0]}</span>
      <button class="btn small" data-open="${d.id}">Открыть карточку →</button>
    </div>
  </article>`;
}

function renderOverview(){renderStats();$('overviewCards').innerHTML=Object.values(state.directions).map(cardHTML).join('');document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.open;nav('directions')}))}
function fillFilters(){
  const systemFilter=$('systemFilter');
  const stageFilter=$('stageFilter');
  const previousSystem=systemFilter.value||'all';
  const previousStage=stageFilter.value||'all';
  const systems=[['all','Все системы'],...Object.values(state.directions).map(d=>[d.id,d.name])];
  const stages=[...new Set(Object.values(state.directions).map(d=>d.stage))];
  systemFilter.innerHTML=systems.map(([v,t])=>`<option value="${esc(v)}">${esc(t)}</option>`).join('');
  stageFilter.innerHTML='<option value="all">Все этапы</option>'+stages.map(s=>`<option value="${esc(s)}">${esc(s)}</option>`).join('');
  systemFilter.value=systems.some(([v])=>v===previousSystem)?previousSystem:'all';
  stageFilter.value=stages.includes(previousStage)?previousStage:'all';
}

function renderDirections(){
  fillFilters();
  const sys=$('systemFilter').value;
  const stage=$('stageFilter').value;
  const dirs=Object.values(state.directions).filter(d=>(sys==='all'||d.id===sys)&&(stage==='all'||d.stage===stage));
  if(!dirs.length){
    $('systemList').innerHTML='<div class="empty">Нет направлений по выбранным фильтрам</div>';
    $('detailPanel').innerHTML='<div class="empty">Нет карточек для выбранной комбинации фильтров</div>';
    return;
  }
  if(!dirs.some(d=>d.id===selected))selected=dirs[0].id;
  $('systemList').innerHTML=dirs.map(d=>`<button class="${selected===d.id?'active':''}" data-select="${d.id}"><span class="list-icon">${d.icon}</span><span>${esc(d.name)}</span></button>`).join('');
  document.querySelectorAll('[data-select]').forEach(b=>b.addEventListener('click',()=>{
    selected=b.dataset.select;
    renderDirections();
  }));
  const d=state.directions[selected];
  $('detailPanel').innerHTML=d?detailHTML(d):'<div class="empty">Выбери направление или измени фильтры</div>';
  if(d)wireDetail();
}

function listBlock(arr){return arr.length?`<ul>${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'<span class="muted">Пока не указано</span>'}
function detailHTML(d){
  const funcs=d.functions.map(f=>`<span class="function-chip">${esc(f)}</span>`).join('');
  const liveDot=d.liveStatus==='blocked'?'blocked':d.liveStatus==='accepted'||d.liveStatus==='accepted_partial'?'pass':'pending';
  return `<div class="detail-head">
    <div>
      <div class="eyebrow">${esc(d.stage)}</div>
      <h2>${d.icon} ${esc(d.name)}</h2>
      <p>${esc(d.summary)}</p>
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:11px">
        <span class="status-pill ${workStatusClass(d)}">${esc(workStatusLabel(d))}</span>
        <span class="stage-pill">${esc(d.status)}</span>
        <span class="status-pill ${liveStatusClass(d)}">Живая приёмка: ${esc(liveLabel(d))}</span>
      </div>
    </div>
    <div class="detail-actions">
      <button class="btn" id="editBtn">✎ Редактировать</button>
      <button class="btn primary" id="makePromptBtn">✦ Резюме + промт</button>
    </div>
  </div>
  <div class="detail-grid">
    <div class="info-block">
      <div class="info-title">${d.id==='mathcad'?'Компоненты основы':'Реализованные функции'}${d.functionCount?` · ${d.functionCount} всего`:''}</div>
      <div class="function-list">${funcs||'<span class="muted">Нет данных</span>'}</div>
      ${d.id==='sw'?'<div class="form-help" style="margin-top:9px">Показаны три функции последнего пакета; полный перечень 38 функций ещё не перенесён в карточку.</div>':''}
    </div>
    <div class="info-block"><div class="info-title">Результаты проверок</div><div class="info-body">${esc(d.tests)}</div></div>
    <div class="info-block full">
      <div class="info-title">Живая приёмка / незавершённые проверки</div>
      <div class="info-body"><div class="test-line"><span class="test-dot ${liveDot}"></span><span><strong>${esc(liveLabel(d))}</strong><br>${esc(d.liveNotes)}</span></div></div>
    </div>
    <div class="info-block"><div class="info-title">Ограничения</div><div class="info-body">${listBlock(d.limitations)}</div></div>
    <div class="info-block"><div class="info-title">Нерешённые вопросы</div><div class="info-body">${listBlock(d.open)}</div></div>
    <div class="info-block full"><div class="info-title">${d.workStatus==='paused'?'Шаг при возобновлении':'Следующий шаг'}</div><div class="info-body">${esc(nextStepText(d))}</div></div>
  </div>
  <div class="prompt-box">
    <div class="prompt-box-head">
      <div><h3>Продолжение в новом чате</h3><p>Генератор добавит архитектурные правила, текущий режим работы, незавершённые проверки и следующий шаг.</p></div>
      <button class="btn small" id="makePromptBtn2">Сформировать</button>
    </div>
    <div class="prompt-output" id="promptOutput">
      <div class="output-card"><div class="output-head"><span>Краткое резюме</span><button class="btn small" id="copySummary">Копировать</button></div><div class="output-text" id="summaryOutput"></div></div>
      <div class="output-card"><div class="output-head"><span>Готовый промт для нового чата</span><button class="btn small" id="copyPrompt">Копировать</button></div><div class="output-text" id="promptTextOutput"></div></div>
    </div>
  </div>
  <div class="footer-note">Последнее обновление: ${dateLabel(d.updated)}. Данные сохраняются в локальном хранилище браузера.</div>`;
}

function wireDetail(){$('editBtn').addEventListener('click',()=>openEditor(selected));$('makePromptBtn').addEventListener('click',()=>generateFor(selected));$('makePromptBtn2').addEventListener('click',()=>generateFor(selected))}
$('systemFilter').addEventListener('change',renderDirections);$('stageFilter').addEventListener('change',renderDirections);
function openEditor(id){
  editingId=id;
  const d=state.directions[id];
  $('editTitle').textContent='Обновить: '+d.name;
  $('fName').value=d.name;
  $('fWorkStatus').value=d.workStatus||'active';
  $('fStatus').value=d.status;
  $('fStage').value=d.workStatus==='paused'?(d.resumeStage||'Реализация'):d.stage;
  $('fLive').value=d.liveStatus;
  $('fSummary').value=d.summary;
  $('fFunctions').value=d.functions.join('\n');
  $('fTests').value=d.tests;
  $('fLiveNotes').value=d.liveNotes;
  $('fLimits').value=d.limitations.join('\n');
  $('fOpen').value=d.open.join('\n');
  $('fNext').value=d.next;
  $('fPromptNotes').value=d.promptNotes||'';
  $('editModal').classList.add('open');
}

function closeEditor(){$('editModal').classList.remove('open');editingId=null}
$('closeModal').addEventListener('click',closeEditor);$('cancelEdit').addEventListener('click',closeEditor);$('editModal').addEventListener('click',e=>{if(e.target===$('editModal'))closeEditor()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeEditor()});
$('editForm').addEventListener('submit',e=>{
  e.preventDefault();
  if(!editingId)return;
  const d=state.directions[editingId];
  const before=clone(d);
  const workStatus=$('fWorkStatus').value;
  const resumeStage=$('fStage').value==='Пауза'?(d.resumeStage||'Реализация'):$('fStage').value;
  const stage=workStatus==='paused'?'Пауза':resumeStage;
  Object.assign(d,{
    workStatus,
    resumeStage,
    status:$('fStatus').value,
    stage,
    liveStatus:$('fLive').value,
    summary:$('fSummary').value.trim(),
    functions:splitLines($('fFunctions').value),
    tests:$('fTests').value.trim(),
    liveNotes:$('fLiveNotes').value.trim(),
    limitations:splitLines($('fLimits').value),
    open:splitLines($('fOpen').value),
    next:$('fNext').value.trim(),
    promptNotes:$('fPromptNotes').value.trim(),
    updated:new Date().toISOString()
  });
  const fields=['workStatus','resumeStage','status','stage','liveStatus','summary','functions','tests','liveNotes','limitations','open','next','promptNotes'];
  const changed=fields.filter(k=>JSON.stringify(before[k])!==JSON.stringify(d[k]));
  if(changed.length){
    state.history.unshift({
      date:d.updated,
      system:editingId,
      title:d.name+': обновление карточки',
      description:'Изменены поля: '+changed.join(', ')+'.',
      changes:changed.map(k=>({
        workStatus:'режим работы',
        resumeStage:'этап при возобновлении',
        status:'технический статус',
        stage:'этап',
        liveStatus:'живая приёмка',
        summary:'резюме',
        functions:'функции',
        tests:'проверки',
        liveNotes:'живая приёмка / проверки',
        limitations:'ограничения',
        open:'нерешённые вопросы',
        next:'следующий шаг',
        promptNotes:'дополнения к промту'
      }[k]||k))
    });
  }
  persist();
  closeEditor();
  renderOverview();
  renderDirections();
  renderHistory();
  toast('Изменения сохранены и добавлены в историю');
});

function summaryText(d){
  return [
    `CORETOOLKIT — ${d.name}`,
    `Дата формирования: ${dateLabel(new Date().toISOString())}`,
    `Режим работы: ${workStatusLabel(d)}`,
    `Технический статус: ${d.status}`,
    `Этап: ${d.stage}`,
    `Кратко: ${d.summary}`,
    '',
    `Реализованные функции (${d.functions.length} записей):`,
    ...d.functions.map(x=>'• '+x),
    '',
    `Результаты проверок: ${d.tests}`,
    '',
    `Живая приёмка: ${liveLabel(d)}`,
    d.liveNotes,
    '',
    'Ограничения:',
    ...d.limitations.map(x=>'• '+x),
    '',
    'Нерешённые вопросы:',
    ...d.open.map(x=>'• '+x),
    '',
    `${d.workStatus==='paused'?'Шаг при возобновлении':'Следующий шаг'}: ${d.next}`
  ].join('\n');
}

function promptText(d){
  const focusRules=d.workStatus==='paused'
    ? [
      'ВАЖНО: это направление временно приостановлено по решению пользователя.',
      'Не возобновляй реализацию, не меняй код и не запускай новые проверки в этом направлении без отдельного явного задания.',
      'Сохраняй приведённые ниже сведения как контекст; не трактуй следующий шаг как разрешение продолжать работу.'
    ]
    : [
      'Сейчас единственный активный фокус разработки CoreToolkit — SolidWorks.',
      'Не изменяй код КОМПАС-3D или Mathcad без отдельного задания.'
    ];
  return [
    `Ты продолжаешь работу с CoreToolkit в направлении ${d.name}. Сверь фактическое состояние с этим контекстом перед любыми действиями.`,
    '',
    'ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА ПРОЕКТА',
    '- Реализуй переиспользуемые native API-функции внутри собственного CoreToolkit.',
    '- MCP-репозитории допустимы только как справочные источники API и паттернов реализации. Не добавляй MCP-серверы, MCP transport, MCP runtime или MCP-зависимости.',
    '- Не изменяй код других CAD-направлений без отдельного задания.',
    '- Не считай mock-тесты доказательством живой приёмки. Отмечай функцию принятой только после проверки на реальном приложении и проверки результата после повторного открытия, если это применимо.',
    '- Перед изменениями изучи текущий код, контракты, каталог API, тесты и журнал работ. Сохраняй журнал работ актуальным, чтобы работу можно было продолжить в новом чате.',
    '- Сначала проверь незавершённые проверки и блокеры. Не дублируй уже завершённую работу и не заявляй о неподтверждённых результатах.',
    ...focusRules,
    '',
    'ТЕКУЩЕЕ СОСТОЯНИЕ',
    `Режим работы: ${workStatusLabel(d)}`,
    `Технический статус: ${d.status}`,
    `Этап: ${d.stage}`,
    `Кратко: ${d.summary}`,
    '',
    'РЕАЛИЗОВАННЫЕ ФУНКЦИИ',
    ...d.functions.map(x=>'- '+x),
    '',
    'АВТОМАТИЧЕСКИЕ ПРОВЕРКИ',
    d.tests,
    '',
    'ЖИВАЯ ПРИЁМКА И НЕЗАВЕРШЁННЫЕ ПРОВЕРКИ',
    `Статус: ${liveLabel(d)}`,
    d.liveNotes,
    '',
    'ОГРАНИЧЕНИЯ',
    ...d.limitations.map(x=>'- '+x),
    '',
    'НЕРЕШЁННЫЕ ВОПРОСЫ / БЛОКЕРЫ',
    ...d.open.map(x=>'- '+x),
    '',
    `${d.workStatus==='paused'?'ШАГ ПРИ ВОЗОБНОВЛЕНИИ':'СЛЕДУЮЩИЙ ШАГ'}`,
    d.next,
    '',
    d.promptNotes?`ДОПОЛНИТЕЛЬНЫЕ УКАЗАНИЯ\n${d.promptNotes}`:'',
    '',
    'ПОРЯДОК РАБОТЫ',
    '1. Сверь фактическое состояние исходников и журнала с этим резюме.',
    '2. Составь короткий план с учётом зависимостей и незавершённых проверок.',
    d.workStatus==='paused'
      ? '3. Не выполняй реализацию и проверки до отдельного явного задания на возобновление этого направления.'
      : '3. Реализуй следующий ограниченный пакет native API-функций или устрани указанный блокер.',
    '4. Запусти целевые unit/contract/regression tests, затем полный релевантный набор.',
    '5. Проведи живую приёмку на реальном приложении; отдельно зафиксируй недоступные проверки и причины.',
    '6. Обнови документацию, реестр функций, ограничения и журнал работ.',
    '7. В конце сообщи точные результаты тестов, что принято живой приёмкой, что осталось неподтверждённым и следующий шаг.'
  ].filter(Boolean).join('\n');
}

function generateFor(id){const d=state.directions[id];if(!d)return;const sum=summaryText(d),prompt=promptText(d);if(activeView!=='directions'){selected=id;nav('directions')}const out=$('promptOutput');if(out){out.classList.add('open');$('summaryOutput').textContent=sum;$('promptTextOutput').textContent=prompt;out.scrollIntoView({behavior:'smooth',block:'nearest'});$('copySummary').onclick=()=>copyText(sum,'Резюме скопировано');$('copyPrompt').onclick=()=>copyText(prompt,'Промт скопирован')}else{showGeneratorFallback(id,sum,prompt)}}
function showGeneratorFallback(id,sum,prompt){const d=state.directions[id];const w=window.open('','_blank');if(!w){copyText(prompt,'Промт скопирован');return}w.document.write('<!doctype html><meta charset="utf-8"><title>CoreToolkit prompt</title><style>body{font:14px system-ui;background:#0b1017;color:#e8eef5;padding:28px;max-width:900px;margin:auto}pre{white-space:pre-wrap;background:#111923;padding:18px;border:1px solid #263445;border-radius:12px;line-height:1.55}h1{font-size:22px}button{padding:10px 14px;border-radius:9px;border:0;background:#38bdf8;font-weight:bold;cursor:pointer;margin:8px 0}</style><h1>'+esc(d.name)+' — резюме и промт</h1><h2>Краткое резюме</h2><pre>'+esc(sum)+'</pre><h2>Промт для нового чата</h2><button onclick="navigator.clipboard.writeText(document.getElementById(\'p\').innerText)">Копировать промт</button><pre id="p">'+esc(prompt)+'</pre>');w.document.close()}
async function copyText(text,msg){try{await navigator.clipboard.writeText(text);toast(msg)}catch(e){const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');toast(msg)}catch(_){toast('Не удалось скопировать автоматически')}ta.remove()}}
function renderHistory(){const h=state.history||[];$('historyCount').textContent=h.length+' записей';$('historyList').innerHTML=h.length?h.map(item=>{const d=state.directions[item.system];return `<article class="history-item"><div class="history-date"><strong>${dateLabel(item.date)}</strong>${item.system==='all'?'Весь проект':esc(d?.name||item.system)}</div><div class="history-content"><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="history-changes">${(item.changes||[]).map(x=>`<span class="tag">${esc(typeof x==='string'?x:x.label||'изменение')}</span>`).join('')}</div></div></article>`}).join(''):'<div class="empty">История пока пуста</div>'}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='CoreToolkit_Site_backup_'+new Date().toISOString().slice(0,10)+'.json';a.click();URL.revokeObjectURL(url);toast('Резервная копия подготовлена')}
$('exportBtn').addEventListener('click',exportData);$('importBtn').addEventListener('click',()=>$('importFile').click());$('importFile').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{const obj=JSON.parse(await file.text());if(!obj.directions||!obj.history)throw new Error('bad schema');for(const id of ['sw','kompas','mathcad'])if(!obj.directions[id])throw new Error('missing '+id);state=obj;persist();renderAll();toast('Данные импортированы')}catch(err){toast('Не удалось импортировать: проверь JSON-файл')}e.target.value=''});
function promptTarget(){return selected||'sw'}
$('quickPromptBtn').addEventListener('click',()=>generateFor(promptTarget()));$('overviewPromptBtn').addEventListener('click',()=>generateFor(promptTarget()));
function renderAll(){renderOverview();renderDirections();renderHistory()}
renderAll();persist();