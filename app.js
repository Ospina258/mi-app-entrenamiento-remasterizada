'use strict';

/* ============================================================
   Mi Entrenamiento — aplicación
   Datos + lógica + interfaz
   ============================================================ */

/* ---------- Base de alimentos (valores por 100 g) ---------- */
const FOOD_DB = [
  {n:'Pechuga de pollo cruda',p:23,c:0,f:2.6,cat:'proteina',e:'crudo'},
  {n:'Pechuga de pollo cocida',p:31,c:0,f:3.6,cat:'proteina',e:'cocido'},
  {n:'Muslo de pollo crudo',p:19,c:0,f:6,cat:'proteina',e:'crudo'},
  {n:'Carne de res magra cruda',p:21,c:0,f:4,cat:'proteina',e:'crudo'},
  {n:'Carne de res magra cocida',p:26,c:0,f:5,cat:'proteina',e:'cocido'},
  {n:'Lomo de cerdo crudo',p:21,c:0,f:5,cat:'proteina',e:'crudo'},
  {n:'Salmón crudo',p:20,c:0,f:13,cat:'proteina',e:'crudo'},
  {n:'Atún en agua (lata, escurrido)',p:29,c:0,f:1,cat:'proteina',e:'listo'},
  {n:'Tilapia cruda',p:26,c:0,f:3,cat:'proteina',e:'crudo'},
  {n:'Merluza cruda',p:17,c:0,f:2,cat:'proteina',e:'crudo'},
  {n:'Sardinas en aceite (escurridas)',p:25,c:0,f:11,cat:'proteina',e:'listo'},
  {n:'Camarones cocidos',p:24,c:0.2,f:0.3,cat:'proteina',e:'cocido'},
  {n:'Huevo entero crudo',p:13,c:1,f:11,cat:'proteina',e:'crudo'},
  {n:'Huevo entero cocido',p:13,c:1.1,f:11,cat:'proteina',e:'cocido'},
  {n:'Clara de huevo',p:11,c:0.7,f:0.2,cat:'proteina',e:'crudo'},
  {n:'Jamón de pavo en lonchas',p:18,c:1,f:1,cat:'proteina',e:'listo'},
  {n:'Pavo molido crudo',p:27,c:0,f:7,cat:'proteina',e:'crudo'},
  {n:'Tofu firme',p:8,c:2,f:8,cat:'proteina',e:'listo'},
  {n:'Chorizo colombiano',p:24,c:2,f:35,cat:'proteina',e:'listo'},
  {n:'Morcilla',p:15,c:3,f:28,cat:'proteina',e:'listo'},
  {n:'Chicharrón',p:28,c:0,f:55,cat:'proteina',e:'listo'},
  {n:'Leche entera',p:3.2,c:4.8,f:3.3,cat:'proteina',e:'listo'},
  {n:'Leche descremada',p:3.4,c:5,f:0.1,cat:'proteina',e:'listo'},
  {n:'Yogur griego natural',p:10,c:4,f:5,cat:'proteina',e:'listo'},
  {n:'Yogur natural entero',p:3.5,c:5,f:3.5,cat:'proteina',e:'listo'},
  {n:'Queso cottage',p:11,c:3.4,f:4.3,cat:'proteina',e:'listo'},
  {n:'Queso mozzarella',p:22,c:2.2,f:22,cat:'proteina',e:'listo'},
  {n:'Queso fresco',p:14,c:3,f:18,cat:'proteina',e:'listo'},
  {n:'Queso campesino',p:18,c:2,f:24,cat:'proteina',e:'listo'},
  {n:'Queso costeño',p:20,c:1,f:28,cat:'proteina',e:'listo'},
  {n:'Requesón',p:13,c:4,f:9,cat:'proteina',e:'listo'},
  {n:'Arroz blanco crudo',p:7,c:80,f:0.6,cat:'carbo',e:'crudo'},
  {n:'Arroz blanco cocido',p:2.7,c:28,f:0.3,cat:'carbo',e:'cocido'},
  {n:'Arroz integral cocido',p:2.6,c:23,f:0.9,cat:'carbo',e:'cocido'},
  {n:'Avena en hojuelas cruda',p:13,c:66,f:7,cat:'carbo',e:'crudo'},
  {n:'Avena cocida en agua',p:2.5,c:12,f:1.4,cat:'carbo',e:'cocido'},
  {n:'Pan blanco',p:8,c:49,f:3.2,cat:'carbo',e:'listo'},
  {n:'Pan integral',p:13,c:41,f:4.2,cat:'carbo',e:'listo'},
  {n:'Pasta cocida',p:6,c:31,f:0.9,cat:'carbo',e:'cocido'},
  {n:'Pasta integral cocida',p:7,c:29,f:1.2,cat:'carbo',e:'cocido'},
  {n:'Quinoa cocida',p:4.4,c:21,f:1.9,cat:'carbo',e:'cocido'},
  {n:'Papa cocida',p:2,c:17,f:0.1,cat:'carbo',e:'cocido'},
  {n:'Batata cocida',p:1.6,c:20,f:0.1,cat:'carbo',e:'cocido'},
  {n:'Yuca cocida',p:1.4,c:27,f:0.3,cat:'carbo',e:'cocido'},
  {n:'Ñame cocido',p:1.5,c:27,f:0.2,cat:'carbo',e:'cocido'},
  {n:'Arracacha cocida',p:1.5,c:23,f:0.3,cat:'carbo',e:'cocido'},
  {n:'Ahuyama cocida',p:1,c:7,f:0.1,cat:'carbo',e:'cocido'},
  {n:'Arepa de maíz cocida',p:6,c:45,f:3,cat:'carbo',e:'cocido'},
  {n:'Arepa de choclo',p:5,c:40,f:5,cat:'carbo',e:'cocido'},
  {n:'Tortilla de maíz',p:5.7,c:45,f:2.5,cat:'carbo',e:'listo'},
  {n:'Banano',p:1.1,c:23,f:0.3,cat:'carbo',e:'listo'},
  {n:'Plátano hartón cocido',p:1.5,c:32,f:0.2,cat:'carbo',e:'cocido'},
  {n:'Manzana',p:0.3,c:14,f:0.2,cat:'carbo',e:'listo'},
  {n:'Naranja',p:0.9,c:12,f:0.1,cat:'carbo',e:'listo'},
  {n:'Papaya',p:0.5,c:11,f:0.3,cat:'carbo',e:'listo'},
  {n:'Mango',p:0.8,c:15,f:0.4,cat:'carbo',e:'listo'},
  {n:'Piña',p:0.5,c:13,f:0.1,cat:'carbo',e:'listo'},
  {n:'Guayaba',p:2.6,c:14,f:1,cat:'carbo',e:'listo'},
  {n:'Maracuyá',p:2.2,c:23,f:0.7,cat:'carbo',e:'listo'},
  {n:'Lulo',p:1.5,c:7,f:0.6,cat:'carbo',e:'listo'},
  {n:'Mora',p:1.4,c:10,f:0.5,cat:'carbo',e:'listo'},
  {n:'Fresas',p:0.7,c:8,f:0.3,cat:'carbo',e:'listo'},
  {n:'Curuba',p:1.5,c:8,f:0.2,cat:'carbo',e:'listo'},
  {n:'Granadilla',p:2.2,c:23,f:0.7,cat:'carbo',e:'listo'},
  {n:'Chontaduro',p:2.3,c:30,f:8,cat:'carbo',e:'listo'},
  {n:'Borojó',p:1.1,c:22,f:0.6,cat:'carbo',e:'listo'},
  {n:'Lentejas cocidas',p:9,c:20,f:0.4,cat:'carbo',e:'cocido'},
  {n:'Frijoles negros cocidos',p:8.9,c:24,f:0.5,cat:'carbo',e:'cocido'},
  {n:'Frijoles paisas cocidos',p:8,c:20,f:2,cat:'carbo',e:'cocido'},
  {n:'Garbanzos cocidos',p:8.9,c:27,f:2.6,cat:'carbo',e:'cocido'},
  {n:'Arveja cocida',p:5.4,c:15,f:0.4,cat:'carbo',e:'cocido'},
  {n:'Habichuela cocida',p:1.8,c:7,f:0.1,cat:'carbo',e:'cocido'},
  {n:'Aguacate',p:2,c:9,f:15,cat:'grasa',e:'listo'},
  {n:'Almendras',p:21,c:22,f:50,cat:'grasa',e:'listo'},
  {n:'Nueces',p:15,c:14,f:65,cat:'grasa',e:'listo'},
  {n:'Cacahuetes',p:26,c:16,f:49,cat:'grasa',e:'listo'},
  {n:'Mantequilla de maní',p:25,c:20,f:50,cat:'grasa',e:'listo'},
  {n:'Aceite de oliva',p:0,c:0,f:100,cat:'grasa',e:'listo'},
  {n:'Aceite de girasol',p:0,c:0,f:100,cat:'grasa',e:'listo'},
  {n:'Semillas de chía',p:17,c:42,f:31,cat:'grasa',e:'listo'},
  {n:'Semillas de lino',p:18,c:29,f:42,cat:'grasa',e:'listo'},
  {n:'Aceitunas',p:1,c:6,f:11,cat:'grasa',e:'listo'},
  {n:'Pepitas de calabaza',p:30,c:11,f:49,cat:'grasa',e:'listo'},
  {n:'Brócoli',p:2.8,c:7,f:0.4,cat:'verdura',e:'cocido'},
  {n:'Espinaca',p:2.9,c:3.6,f:0.4,cat:'verdura',e:'crudo'},
  {n:'Tomate',p:0.9,c:3.9,f:0.2,cat:'verdura',e:'listo'},
  {n:'Lechuga',p:1.4,c:2.9,f:0.2,cat:'verdura',e:'listo'},
  {n:'Zanahoria',p:0.9,c:10,f:0.2,cat:'verdura',e:'listo'},
  {n:'Pepino',p:0.7,c:3.6,f:0.1,cat:'verdura',e:'listo'},
  {n:'Apio',p:0.7,c:3,f:0.2,cat:'verdura',e:'listo'},
  {n:'Pimentón rojo',p:1,c:6,f:0.3,cat:'verdura',e:'listo'},
  {n:'Pimentón verde',p:0.9,c:5,f:0.2,cat:'verdura',e:'listo'},
  {n:'Cebolla',p:1.1,c:9,f:0.1,cat:'verdura',e:'listo'},
  {n:'Cebolla larga',p:1,c:7,f:0.2,cat:'verdura',e:'listo'},
  {n:'Cilantro',p:2.1,c:3.7,f:0.5,cat:'verdura',e:'listo'},
  {n:'Champiñones',p:3.1,c:3.3,f:0.3,cat:'verdura',e:'listo'},
  {n:'Calabacín',p:1.2,c:3.1,f:0.3,cat:'verdura',e:'cocido'},
  {n:'Berenjena',p:1,c:6,f:0.2,cat:'verdura',e:'cocido'},
  {n:'Repollo',p:1.3,c:6,f:0.1,cat:'verdura',e:'listo'},
  {n:'Coliflor',p:1.9,c:5,f:0.3,cat:'verdura',e:'cocido'},
  {n:'Panela',p:0.2,c:95,f:0.1,cat:'carbo',e:'listo'},
  {n:'Arequipe',p:6,c:55,f:8,cat:'carbo',e:'listo'},
  {n:'Bocadillo de guayaba',p:0.5,c:80,f:0.1,cat:'carbo',e:'listo'},
  {n:'Whey protein (polvo)',p:80,c:8,f:6,cat:'proteina',e:'listo'},
  {n:'Caseína (polvo)',p:75,c:10,f:5,cat:'proteina',e:'listo'},
  {n:'Maltodextrina',p:0,c:95,f:0,cat:'carbo',e:'listo'}
];

/* ---------- Objetivos ---------- */
const GOALS = {
  maintain:       {name:'Mantenimiento',factor:1.00,protKg:1.6,fatKg:0.9,desc:'Mantener tu peso actual.'},
  recomp:         {name:'Recomposición',factor:0.95,protKg:2.2,fatKg:0.8,desc:'Perder grasa y ganar músculo lentamente.'},
  cut_lean:       {name:'Cut limpio',factor:0.85,protKg:2.2,fatKg:0.8,desc:'Perder grasa preservando músculo.'},
  cut_aggressive: {name:'Cut agresivo',factor:0.75,protKg:2.4,fatKg:0.7,desc:'Pérdida rápida. Solo periodos cortos.'},
  bulk_clean:     {name:'Bulk limpio',factor:1.10,protKg:1.9,fatKg:0.9,desc:'Ganancia lenta y controlada.'},
  bulk_moderate:  {name:'Bulk moderado',factor:1.15,protKg:1.8,fatKg:1.0,desc:'Balance entre ganancia y grasa.'},
  bulk_dirty:     {name:'Bulk sucio',factor:1.25,protKg:1.6,fatKg:1.2,desc:'Ganancia rápida. Requiere definición después.'}
};

const EXPERIENCE = {
  principiante:{name:'Principiante',icon:'🌱',desc:'0–1 año entrenando. Progresas rápido con poco volumen.',volMin:8,volMax:14},
  intermedio:{name:'Intermedio',icon:'🔥',desc:'1–3 años. Necesitas más volumen para progresar.',volMin:10,volMax:18},
  avanzado:{name:'Avanzado',icon:'⚡',desc:'3+ años. Alto volumen y técnicas avanzadas.',volMin:12,volMax:22}
};

const FREQUENCIES = {
  '2-3':{name:'2-3 días/semana',icon:'🗓️',split:'Full Body',days:3,desc:'Rutina full body. Todo el cuerpo cada sesión.'},
  '4':{name:'4 días/semana',icon:'📅',split:'Torso / Pierna',days:4,desc:'2 días torso, 2 días pierna. Buen balance frecuencia/volumen.'},
  '5':{name:'5 días/semana',icon:'📆',split:'PPL + Torso',days:5,desc:'Push, pull, legs + torso y pierna.'},
  '6+':{name:'6+ días/semana',icon:'🔥',split:'Push/Pull/Legs ×2',days:6,desc:'PPL repetido dos veces. Cada grupo 2 veces por semana.'}
};

const MUSCLE_VOL_MULT = {
  'Pecho':1.00,'Espalda':1.05,'Trapecio':0.55,'Hombros':0.80,'Bíceps':0.70,'Tríceps':0.70,'Antebrazo':0.40,
  'Glúteo':1.05,'Cuádriceps':1.10,'Femoral':1.00,'Gemelos':0.80,'Core':0.65
};

const MUSCLE_ORDER = ['Pecho','Espalda','Trapecio','Hombros','Bíceps','Tríceps','Antebrazo','Glúteo','Cuádriceps','Femoral','Gemelos','Core'];
const HEAVY_EXERCISES = ['Sentadilla','Peso muerto','Peso muerto convencional','Peso muerto rumano','Press banca plano','Press inclinado','Press militar','Dominadas','Remo con barra','Fondos','Prensa','Sentadilla búlgara','Peso muerto sumo','Jalón al pecho','Remo con mancuerna'];
const MEAL_ORDER = ['Desayuno','Almuerzo','Cena','Snack','Pre-entreno','Post-entreno'];
const MONTHS_SHORT = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const MONTHS_LONG = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DAY_SHORT = ['lun','mar','mié','jue','vie','sáb','dom'];
const DAY_LETTERS = ['L','M','M','J','V','S','D'];

const STORAGE_KEY = 'gymTracker_v15';
const OLD_KEYS = ['gymTracker_v14','gymTracker_v13','gymTracker_v12','gymTracker_v11','gymTracker_v10','gymTracker_v9','gymTracker_v8','gymTracker_v7','gymTracker_v6','gymTracker_v5'];

const defaultState = {
  exercises:{
    'Pecho':['Press banca plano','Press inclinado','Aperturas con mancuernas','Fondos','Press declinado'],
    'Espalda':['Dominadas','Remo con barra','Jalón al pecho','Remo con mancuerna','Pullover'],
    'Trapecio':['Encogimientos con barra','Encogimientos con mancuernas','Face pull'],
    'Hombros':['Press militar','Elevaciones laterales','Pájaros','Arnold press'],
    'Bíceps':['Curl bíceps barra','Curl alterno','Curl martillo','Curl predicador'],
    'Tríceps':['Extensión tríceps polea','Press francés','Fondos en paralelas','Patada de tríceps'],
    'Antebrazo':['Curl de muñeca','Curl inverso','Agarre estático'],
    'Glúteo':['Hip thrust','Patada de glúteo','Puente de glúteo','Abducción en máquina','Peso muerto sumo'],
    'Cuádriceps':['Sentadilla','Prensa','Extensión de cuádriceps','Zancadas','Sentadilla búlgara'],
    'Femoral':['Curl femoral tumbado','Curl femoral sentado','Peso muerto rumano','Nordic curl','Peso muerto convencional'],
    'Gemelos':['Elevación de talones de pie','Elevación de talones sentado','Gemelos en prensa'],
    'Core':['Plancha','Crunch','Elevación de piernas','Rueda abdominal','Plancha lateral','Mountain climbers']
  },
  workouts:[],
  weeklyArchives:[],
  profile:{
    name:'',weight:null,height:null,age:null,sex:'M',goal:'maintain',activity:'1.55',
    experience:'principiante',frequency:'4',routineMode:'suggested',customRoutine:[]
  },
  meals:[],
  customFoods:[],
  supplements:[
    {id:1,name:'Creatina monohidrato',dose:'5 g'},
    {id:2,name:'Proteína whey',dose:'1 scoop (30 g)'},
    {id:3,name:'Vitamina D3',dose:'2000 UI'}
  ],
  supplementLog:{},
  onboarded:false
};

/* ---------- Estado ---------- */
let state = JSON.parse(JSON.stringify(defaultState));
let activeTab = 'inicio';
let selectedExercise = null;
let selectedFood = null;
let currentRepMode = 'dia';
let activeSheet = null;
let welcomeStep = 1;
let welcomeEditMode = false;
let welcomeReturnTab = 'inicio';
let ringSeq = 0;

/* ---------- Utilidades ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const round = (n, dec = 2) => { const f = 10 ** dec; return Math.round((Number(n) || 0) * f) / f; };
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const pad2 = n => String(n).padStart(2, '0');
const toISODate = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const fromISO = iso => new Date(`${iso}T12:00:00`);
const todayISO = () => toISODate(new Date());
const fmtDate = iso => { if(!iso) return ''; const [, m, d] = iso.split('-'); return `${Number(d)} ${MONTHS_SHORT[Number(m) - 1]}`; };
const fmtDateFull = iso => { if(!iso) return ''; const [y, m, d] = iso.split('-'); return `${Number(d)} ${MONTHS_SHORT[Number(m) - 1]} ${y}`; };
const fmtInt = n => Math.round(Number(n) || 0).toLocaleString('es-CO');
const fmtDec = (n, d = 1) => (Math.round((Number(n) || 0) * 10 ** d) / 10 ** d).toFixed(d);
const parseNum = v => {
  if(v === null || v === undefined) return NaN;
  const s = String(v).trim().replace(/\s/g, '').replace(',', '.');
  if(!s) return NaN;
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : NaN;
};
const uid = () => Date.now() + Math.floor(Math.random() * 1000);
const icon = (name, cls = '') => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

function dateLong(d = new Date()){
  const dayName = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'][d.getDay()];
  return `${dayName}, ${d.getDate()} de ${MONTHS_LONG[d.getMonth()]}`;
}
function greetingWord(){
  const h = new Date().getHours();
  if(h < 6) return 'Buenas noches';
  if(h < 12) return 'Buenos días';
  if(h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}
function getWeekRange(date = new Date()){
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  const day = d.getDay() || 7;
  d.setDate(d.getDate() - day + 1);
  const start = toISODate(d);
  d.setDate(d.getDate() + 6);
  return { start, end: toISODate(d) };
}
function getWeekKey(iso){
  const d = fromISO(iso);
  const day = d.getDay() || 7;
  d.setDate(d.getDate() - day + 1);
  return toISODate(d);
}
function getWeekDays(date = new Date()){
  const { start } = getWeekRange(date);
  const base = fromISO(start);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return { iso: toISODate(d), letter: DAY_LETTERS[i], day: d.getDate(), date: d };
  });
}

/* ---------- Migración y persistencia ---------- */
function migrateExercises(data){
  const migrations = {
    'Piernas':{
      'Sentadilla':'Cuádriceps','Prensa':'Cuádriceps','Extensión de cuádriceps':'Cuádriceps','Extensión de cuádriceps sentado':'Cuádriceps',
      'Zancadas':'Cuádriceps','Sentadilla búlgara':'Cuádriceps',
      'Hip thrust':'Glúteo','Patada de glúteo':'Glúteo','Puente de glúteo':'Glúteo','Abducción en máquina':'Glúteo',
      'Peso muerto rumano':'Femoral','Curl femoral tumbado':'Femoral','Curl femoral sentado':'Femoral','Nordic curl':'Femoral',
      'Peso muerto':'Femoral','Gemelos':'Gemelos','Elevación de talones de pie':'Gemelos','Elevación de talones sentado':'Gemelos','Gemelos en prensa':'Gemelos'
    },
    'Tren inferior':{
      'Sentadilla':'Cuádriceps','Prensa':'Cuádriceps','Hip thrust':'Glúteo','Peso muerto rumano':'Femoral'
    },
    'Brazos':{
      'Curl bíceps barra':'Bíceps','Curl alterno':'Bíceps','Curl martillo':'Bíceps','Curl predicador':'Bíceps',
      'Extensión tríceps polea':'Tríceps','Press francés':'Tríceps','Fondos en paralelas':'Tríceps','Patada de tríceps':'Tríceps'
    }
  };
  const next = {};
  Object.entries(data.exercises || {}).forEach(([muscle, list])=>{
    if(!Array.isArray(list)) return;
    if(migrations[muscle]){
      list.forEach(ex=>{
        const target = migrations[muscle][ex] || (muscle === 'Brazos' ? 'Bíceps' : 'Cuádriceps');
        if(!next[target]) next[target] = [];
        if(!next[target].includes(ex)) next[target].push(ex);
      });
    } else {
      if(!next[muscle]) next[muscle] = [];
      list.forEach(ex=>{ if(!next[muscle].includes(ex)) next[muscle].push(ex); });
    }
  });
  MUSCLE_ORDER.forEach(g=>{ if(!next[g]) next[g] = []; });
  (Array.isArray(data.workouts) ? data.workouts : []).forEach(w=>{
    if(migrations[w.bodyPart]){
      w.bodyPart = migrations[w.bodyPart][w.exercise] || (w.bodyPart === 'Brazos' ? 'Bíceps' : 'Cuádriceps');
    }
  });
  return {...data, exercises:next};
}

function normalizeState(raw){
  const base = JSON.parse(JSON.stringify(defaultState));
  if(!raw || typeof raw !== 'object') return base;
  const merged = {...base, ...raw};
  merged.profile = {...base.profile, ...(raw.profile || {})};
  merged.exercises = raw.exercises && typeof raw.exercises === 'object' && Object.keys(raw.exercises).length
    ? raw.exercises
    : base.exercises;
  MUSCLE_ORDER.forEach(m=>{ if(!Array.isArray(merged.exercises[m])) merged.exercises[m] = []; });
  ['workouts','weeklyArchives','meals','customFoods','supplements'].forEach(k=>{ if(!Array.isArray(merged[k])) merged[k] = base[k]; });
  if(!merged.supplementLog || typeof merged.supplementLog !== 'object') merged.supplementLog = {};
  if(typeof merged.profile.customRoutine === 'string' || !Array.isArray(merged.profile.customRoutine)) merged.profile.customRoutine = [];
  if(!merged.profile.routineMode) merged.profile.routineMode = 'suggested';
  if(!GOALS[merged.profile.goal]) merged.profile.goal = 'maintain';
  if(!EXPERIENCE[merged.profile.experience]) merged.profile.experience = 'principiante';
  if(!FREQUENCIES[merged.profile.frequency]) merged.profile.frequency = '4';
  merged.workouts.forEach(w=>{ if(!Array.isArray(w.sets)) w.sets = []; });
  return merged;
}

function load(){
  try{
    let raw = localStorage.getItem(STORAGE_KEY);
    if(!raw){
      for(const key of OLD_KEYS){
        const old = localStorage.getItem(key);
        if(old){ raw = old; break; }
      }
    }
    if(raw){
      const parsed = JSON.parse(raw);
      state = normalizeState(migrateExercises(parsed));
    }
  }catch(err){
    console.warn('No se pudo cargar el estado:', err);
  }
}

function save(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }catch(err){
    console.warn('No se pudo guardar:', err);
    toast('No hay espacio para guardar. Libera almacenamiento.', 'error');
  }
}

function processWeeklyArchives(){
  if(!Array.isArray(state.weeklyArchives)) state.weeklyArchives = [];
  const currentMonday = getWeekRange().start;
  const weeks = {};
  state.workouts.forEach(w=>{
    const key = getWeekKey(w.date);
    if(!weeks[key]){
      const start = fromISO(key);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      weeks[key] = { start:key, end:toISODate(end), workouts:[] };
    }
    weeks[key].workouts.push(w);
  });
  let changed = false;
  Object.keys(weeks).forEach(key=>{
    if(key < currentMonday && !state.weeklyArchives.some(a=>a.start === key)){
      const wk = weeks[key];
      const totalSets = wk.workouts.reduce((s,w)=>s + w.sets.length, 0);
      const totalVol = wk.workouts.reduce((s,w)=>s + w.sets.reduce((a,x)=>a + x.reps * x.weight, 0), 0);
      const days = new Set(wk.workouts.map(w=>w.date)).size;
      state.weeklyArchives.push({ start:key, end:wk.end, totalSets, totalVol, days });
      changed = true;
    }
  });
  if(changed) save();
}

/* ---------- Cálculos de entrenamiento ---------- */
function getVolumeRange(expKey, freqKey, muscle){
  const exp = EXPERIENCE[expKey] || EXPERIENCE.principiante;
  const freqMult = {'2-3':.75,'4':.9,'5':1,'6+':1.1}[freqKey] || 1;
  const muscMult = MUSCLE_VOL_MULT[muscle] || 1;
  return {
    volMin:Math.max(3, Math.round(exp.volMin * freqMult * muscMult)),
    volMax:Math.max(6, Math.round(exp.volMax * freqMult * muscMult)),
    exp
  };
}
function getVolumeZone(sets, exp, freq, muscle){
  const range = getVolumeRange(exp, freq, muscle);
  if(sets === 0) return { color:'#424958', label:'Sin volumen', cls:'badge-soft' };
  if(sets < range.volMin) return { color:'#fbbf24', label:'Bajo', cls:'badge-yellow' };
  if(sets <= range.volMax) return { color:'#34d399', label:'Óptimo', cls:'badge-green' };
  return { color:'#fb7185', label:'Excesivo', cls:'badge-red' };
}
function calcWeeklyVolume(){
  const { start, end } = getWeekRange();
  const vol = {};
  state.workouts.filter(w=>w.date >= start && w.date <= end).forEach(w=>{
    if(!vol[w.bodyPart]) vol[w.bodyPart] = { sets:0, drops:0, sessions:{} };
    vol[w.bodyPart].sets += w.sets.length;
    vol[w.bodyPart].drops += w.sets.filter(s=>s.isDrop).length;
    vol[w.bodyPart].sessions[w.date] = (vol[w.bodyPart].sessions[w.date] || 0) + w.sets.length;
  });
  return vol;
}
function getWeekWorkoutStats(){
  const { start, end } = getWeekRange();
  const list = state.workouts.filter(w=>w.date >= start && w.date <= end);
  return {
    list,
    days:new Set(list.map(w=>w.date)),
    sets:list.reduce((s,w)=>s + w.sets.length, 0),
    volume:list.reduce((s,w)=>s + w.sets.reduce((a,x)=>a + x.reps * x.weight, 0), 0),
    drops:list.reduce((s,w)=>s + w.sets.filter(x=>x.isDrop).length, 0)
  };
}
function getStreakWeeks(){
  const weeks = new Set(state.workouts.map(w=>getWeekKey(w.date)));
  if(!weeks.size) return 0;
  const cursor = fromISO(todayISO());
  if(!weeks.has(getWeekKey(toISODate(cursor)))) cursor.setDate(cursor.getDate() - 7);
  let streak = 0;
  while(weeks.has(getWeekKey(toISODate(cursor))) && streak < 520){
    streak++;
    cursor.setDate(cursor.getDate() - 7);
  }
  return streak;
}
function getTodayTotals(){
  const meals = state.meals.filter(m=>m.date === todayISO());
  const totals = meals.reduce((a,m)=>({ prot:a.prot + (Number(m.prot) || 0), carb:a.carb + (Number(m.carb) || 0), fat:a.fat + (Number(m.fat) || 0) }), { prot:0, carb:0, fat:0 });
  return { ...totals, cal:totals.prot * 4 + totals.carb * 4 + totals.fat * 9, meals };
}
function getRecentWorkouts(n = 4){
  return [...state.workouts].sort((a,b)=> b.date.localeCompare(a.date) || b.id - a.id).slice(0, n);
}
function getRecentExercises(n = 5){
  const seen = new Set();
  const out = [];
  [...state.workouts].sort((a,b)=> b.date.localeCompare(a.date) || b.id - a.id).forEach(w=>{
    if(seen.has(w.exercise)) return;
    seen.add(w.exercise);
    out.push({ exercise:w.exercise, bodyPart:w.bodyPart });
  });
  return out.slice(0, n);
}
function bestSetOf(workout){
  return workout.sets.reduce((best,s)=> (s.weight * s.reps > (best?.weight * best?.reps || 0) ? s : best), null);
}

/* ---------- Nutrición (cálculo) ---------- */
function calcNutrition(){
  const p = state.profile;
  if(!p.weight || !p.height || !p.age) return null;
  const goal = GOALS[p.goal] || GOALS.maintain;
  const bmr = p.sex === 'M'
    ? (10 * p.weight) + (6.25 * p.height) - (5 * p.age) + 5
    : (10 * p.weight) + (6.25 * p.height) - (5 * p.age) - 161;
  const tdee = bmr * parseFloat(p.activity || 1.55);
  const targetCal = tdee * goal.factor;
  const protein = p.weight * goal.protKg;
  const fat = p.weight * goal.fatKg;
  const carbs = Math.max(0, (targetCal - protein * 4 - fat * 9) / 4);
  return {
    bmr:Math.round(bmr), tdee:Math.round(tdee), calories:Math.round(targetCal),
    protein:Math.round(protein), carbs:Math.round(carbs), fat:Math.round(fat),
    goalName:goal.name, goalDesc:goal.desc, factor:goal.factor, protKg:goal.protKg, fatKg:goal.fatKg
  };
}
function findFood(name){
  const low = String(name || '').toLowerCase().trim();
  return FOOD_DB.find(f=>f.n.toLowerCase() === low) || state.customFoods.find(f=>f.n.toLowerCase() === low) || null;
}
function allFoods(){ return [...FOOD_DB, ...state.customFoods]; }
function consumedForDate(date){
  const meals = state.meals.filter(m=>m.date === date);
  const t = meals.reduce((a,m)=>({ prot:a.prot + (m.prot || 0), carb:a.carb + (m.carb || 0), fat:a.fat + (m.fat || 0) }), { prot:0, carb:0, fat:0 });
  return { ...t, cal:t.prot * 4 + t.carb * 4 + t.fat * 9, meals };
}

/* ---------- Componentes visuales ---------- */
function ringSVG(pct, size = 120, variant = 'accent', stroke = 8){
  const p = clamp(Number(pct) || 0, 0, 100);
  const r = 50 - stroke / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - p / 100);
  const id = `ring${++ringSeq}`;
  const palettes = {
    accent:['#6d8dff','#a78bfa'],
    green:['#34d399','#10b981'],
    orange:['#fbbf24','#fb923c'],
    red:['#fb7185','#f43f5e'],
    purple:['#a78bfa','#c084fc']
  };
  const colors = palettes[variant] || palettes.accent;
  return `<svg class="ring-svg" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${colors[0]}"/><stop offset="1" stop-color="${colors[1]}"/></linearGradient></defs>
    <circle class="ring-track" cx="50" cy="50" r="${r}" fill="none" stroke-width="${stroke}"/>
    <circle class="ring-progress" cx="50" cy="50" r="${r}" fill="none" stroke="url(#${id})" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}" transform="rotate(-90 50 50)"/>
  </svg>`;
}
function statTile(value, label, unit = '', color = ''){
  return `<div class="stat-tile"><div class="stat-value"${color ? ` style="color:${color}"` : ''}>${value}${unit ? `<span class="unit">${unit}</span>` : ''}</div><div class="stat-label">${label}</div></div>`;
}
function ringBlock(pct, value, label, { size = 120, variant = 'accent', stroke = 8, cls = '' } = {}){
  return `<div class="ring-wrap ${cls}" style="width:${size}px;height:${size}px">${ringSVG(pct, size, variant, stroke)}<div class="ring-center"><strong>${value}</strong><span>${label}</span></div></div>`;
}

/* ---------- Toasts ---------- */
function toast(message, type = 'success'){
  const root = $('#toastRoot');
  if(!root) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const ico = type === 'error' ? 'x' : type === 'info' ? 'info' : 'check';
  el.innerHTML = `<span class="toast-icon">${icon(ico)}</span><span>${esc(message)}</span>`;
  root.appendChild(el);
  setTimeout(()=>{
    el.classList.add('out');
    setTimeout(()=>el.remove(), 240);
  }, 2600);
  while(root.children.length > 3) root.firstElementChild.remove();
}

/* ---------- Hojas y diálogos ---------- */
function closeSheet(immediate = false){
  if(!activeSheet) return;
  const { backdrop, onClose } = activeSheet;
  activeSheet = null;
  document.body.classList.remove('no-scroll');
  const remove = ()=>backdrop.remove();
  if(immediate) remove();
  else {
    backdrop.classList.add('out');
    setTimeout(remove, 190);
  }
  if(typeof onClose === 'function') onClose();
}
function openSheet({ title = '', subtitle = '', body = '', onMount = null, onClose = null, dismissible = true } = {}){
  closeSheet(true);
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title || 'Diálogo')}">
    <div class="sheet-grab"></div>
    ${title ? `<div class="sheet-head"><div><h3>${esc(title)}</h3>${subtitle ? `<p>${esc(subtitle)}</p>` : ''}</div><button type="button" class="sheet-close" data-sheet-close aria-label="Cerrar">${icon('x')}</button></div>` : ''}
    <div class="sheet-content">${body}</div>
  </div>`;
  document.body.appendChild(backdrop);
  document.body.classList.add('no-scroll');
  activeSheet = { backdrop, onClose };
  if(dismissible){
    $$('[data-sheet-close]', backdrop).forEach(btn=>{ btn.onclick = ()=>closeSheet(); });
    backdrop.addEventListener('click', e=>{ if(e.target === backdrop) closeSheet(); });
  }
  if(onMount) onMount(backdrop);
  const focusable = backdrop.querySelector('input, textarea, select, button:not([data-sheet-close]):not(.sheet-close)');
  if(focusable) setTimeout(()=>{ try{ focusable.focus(); }catch(e){} }, 120);
  return backdrop;
}
function confirmDialog({ title = 'Confirmar', message = '', confirmText = 'Confirmar', cancelText = 'Cancelar', danger = false } = {}){
  return new Promise(resolve=>{
    let settled = false;
    const finish = value => {
      if(settled) return;
      settled = true;
      closeSheet(true);
      resolve(value);
    };
    openSheet({
      title,
      body:`<p class="sheet-copy">${message}</p>
        <div class="sheet-actions">
          <button type="button" class="btn btn-ghost" data-cancel>${esc(cancelText)}</button>
          <button type="button" class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-ok>${esc(confirmText)}</button>
        </div>`,
      onMount(root){
        $('[data-cancel]', root).onclick = ()=>finish(false);
        $('[data-ok]', root).onclick = ()=>finish(true);
      },
      onClose(){ if(!settled){ settled = true; resolve(false); } }
    });
  });
}
function promptDialog({ title = 'Editar', label = '', value = '', placeholder = '', confirmText = 'Guardar', inputmode = 'text' } = {}){
  return new Promise(resolve=>{
    let settled = false;
    const finish = val => {
      if(settled) return;
      settled = true;
      closeSheet(true);
      resolve(val);
    };
    openSheet({
      title,
      body:`<label class="field"><span>${esc(label)}</span><input type="text" id="promptInput" inputmode="${esc(inputmode)}" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off"></label>
        <div class="sheet-actions">
          <button type="button" class="btn btn-ghost" data-cancel>Cancelar</button>
          <button type="button" class="btn btn-primary" data-ok>${esc(confirmText)}</button>
        </div>`,
      onMount(root){
        const input = $('#promptInput', root);
        input.focus();
        input.select();
        const ok = ()=>finish(input.value);
        $('[data-ok]', root).onclick = ok;
        $('[data-cancel]', root).onclick = ()=>finish(null);
        input.addEventListener('keydown', e=>{ if(e.key === 'Enter'){ e.preventDefault(); ok(); } });
      },
      onClose(){ if(!settled){ settled = true; resolve(null); } }
    });
  });
}
function openMoreSheet(){
  const items = [
    { icon:'chart', title:'Volumen semanal', desc:'Series por músculo y rutina', tab:'volumen' },
    { icon:'calendar', title:'Reportes', desc:'Resumen por día y por semana', tab:'reportes' },
    { icon:'dumbbell', title:'Ejercicios y respaldo', desc:'Biblioteca, importar y exportar', tab:'ejercicios' }
  ];
  openSheet({
    title:'Más opciones',
    subtitle:'Todo tu progreso en un solo lugar',
    body:`<div class="menu-list">
      ${items.map(it=>`<button type="button" class="menu-row" data-tab="${it.tab}"><span class="menu-icon">${icon(it.icon)}</span><span class="menu-copy"><strong>${it.title}</strong><small>${it.desc}</small></span>${icon('chevron')}</button>`).join('')}
    </div>
    <div class="menu-sep"></div>
    <div class="menu-list">
      <button type="button" class="menu-row" data-action="edit-profile"><span class="menu-icon">${icon('user')}</span><span class="menu-copy"><strong>Editar perfil</strong><small>Datos, nivel y objetivo</small></span>${icon('chevron')}</button>
      <button type="button" class="menu-row" data-action="export"><span class="menu-icon">${icon('download')}</span><span class="menu-copy"><strong>Descargar respaldo</strong><small>Copia de seguridad en JSON</small></span>${icon('chevron')}</button>
      <button type="button" class="menu-row" data-action="import"><span class="menu-icon">${icon('upload')}</span><span class="menu-copy"><strong>Restaurar respaldo</strong><small>Importar un archivo JSON</small></span>${icon('chevron')}</button>
    </div>
    <p class="sheet-note">Tus datos se guardan únicamente en este dispositivo.</p>`
  });
}

/* ---------- Navegación ---------- */
function switchTab(tab){
  const target = document.getElementById(`view-${tab}`);
  if(!target) return;
  activeTab = tab;
  $$('.view').forEach(view=>view.classList.toggle('active', view === target));
  $$('.dock button').forEach(btn=>{
    const isActive = btn.dataset.tab === tab;
    btn.classList.toggle('active', isActive);
    if(isActive) btn.setAttribute('aria-current','page');
    else btn.removeAttribute('aria-current');
  });
  const moreBtn = $('#moreBtn');
  if(moreBtn) moreBtn.classList.toggle('active', ['volumen','reportes','ejercicios'].includes(tab));
  closeSheet(true);
  const renderers = {
    inicio:renderHome,
    registrar:renderRegistrar,
    historial:renderHistory,
    progreso:renderProgress,
    volumen:renderVolume,
    reportes:renderReports,
    nutricion:renderNutrition,
    ejercicios:renderExerciseLibrary
  };
  if(renderers[tab]) renderers[tab]();
  window.scrollTo({ top:0, behavior:'smooth' });
}
window.switchTab = switchTab;

/* ---------- Home ---------- */
function coachTip(){
  const goals = calcNutrition();
  const week = getWeekWorkoutStats();
  const target = FREQUENCIES[state.profile.frequency || '4'].days;
  const today = getTodayTotals();
  const hour = new Date().getHours();
  if(!goals) return { icon:'target', title:'Completa tu perfil', text:'Añade tu peso, altura, edad y objetivo para calcular tus calorías y macros.' };
  if(!today.meals.length && hour >= 15){
    return { icon:'apple', title:'Registra tu día', text:'Aún no has registrado alimentos hoy. Anotar tus comidas te ayuda a saber si vas en línea con tu objetivo.' };
  }
  if(today.meals.length && today.prot < goals.protein * .55 && hour >= 16){
    return { icon:'apple', title:'Te falta proteína', text:`Llevas ${Math.round(today.prot)} g de ${goals.protein} g. Una comida con pollo, huevo o whey te acerca a la meta.` };
  }
  if(week.days.size >= target) return { icon:'sparkles', title:'Semana completada', text:`Ya entrenaste ${week.days.size} de ${target} días. Prioriza dormir y comer bien para aprovechar el estímulo.` };
  if(week.days.size === 0) return { icon:'dumbbell', title:'Empieza la semana', text:'Una sesión de 40 minutos es suficiente para activar el progreso. Registra tu primera serie de hoy.' };
  return { icon:'flame', title:'La constancia manda', text:`Vas ${week.days.size} de ${target} días esta semana. Mantén el ritmo y deja 2–3 repeticiones en reserva en las series pesadas.` };
}
function renderGreeting(){
  const el = $('#greetLine');
  if(!el) return;
  const name = state.profile.name;
  if(!name){
    el.textContent = 'Tu progreso, cada día';
    return;
  }
  const goals = calcNutrition();
  el.innerHTML = `<b>${esc(name)}</b>${goals ? ` · ${goals.goalName}` : ' · Configura tu plan'}`;
}
function renderHome(){
  const wrap = $('#homeContent');
  if(!wrap) return;
  const profile = state.profile;
  const name = profile.name || 'Atleta';
  const goals = calcNutrition();
  const week = getWeekWorkoutStats();
  const target = FREQUENCIES[profile.frequency || '4'].days;
  const pct = target ? clamp(week.days.size / target * 100, 0, 100) : 0;
  const streak = getStreakWeeks();
  const todayWorkouts = state.workouts.filter(w=>w.date === todayISO());
  const recent = getRecentWorkouts(4);
  const totals = getTodayTotals();
  const tip = coachTip();
  const goal = GOALS[profile.goal] || GOALS.maintain;
  const trainingBadge = todayWorkouts.length
    ? `<span class="badge badge-green">${icon('check')} Entrenado</span>`
    : `<span class="badge badge-soft">${icon('clock')} Sin sesión</span>`;

  wrap.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <div class="hero-top">
            <span class="eyebrow" style="margin:0">${dateLong()}</span>
            ${streak > 0 ? `<span class="streak-chip">${icon('flame')} ${streak} sem de racha</span>` : ''}
          </div>
          <h1>${greetingWord()},<br><span class="grad-text">${esc(name)}</span></h1>
          <p class="hero-lead">${goals ? `${goal.name} · ${goal.desc}` : 'Completa tu perfil para desbloquear tu plan personalizado de entrenamiento y nutrición.'}</p>
          <div class="hero-actions">
            <button type="button" class="btn btn-primary" data-tab="registrar">${icon('plus')} Registrar sesión</button>
            <button type="button" class="btn btn-ghost" data-tab="nutricion">${icon('apple')} Ver nutrición</button>
          </div>
        </div>
        <div class="hero-ring">
          <div class="ring-wrap ring-lg" style="width:122px;height:122px">
            ${ringSVG(pct, 122, 'accent', 9)}
            <div class="ring-center"><strong>${week.days.size}/${target}</strong><span>sesiones</span></div>
          </div>
          <span class="hero-ring-label">Esta semana</span>
        </div>
      </div>
    </section>

    <div class="home-stack">
      <div class="home-grid">
        <div class="card">
          <div class="card-head">
            <h3>Esta semana</h3>
            <span class="badge ${week.days.size >= target ? 'badge-green' : 'badge-soft'}">${week.days.size >= target ? 'Completa' : `Faltan ${Math.max(0, target - week.days.size)}`}</span>
          </div>
          ${weekStripHTML(week.days)}
          <div class="stats-grid" style="margin-top:14px">
            ${statTile(week.sets, 'Series')}
            ${statTile(fmtInt(week.volume), 'Volumen', 'kg')}
            ${statTile(week.drops, 'Dropsets', '', 'var(--orange)')}
          </div>
        </div>

        <div class="card">
          <div class="card-head"><h3>Hoy</h3>${trainingBadge}</div>
          ${todayWorkouts.length ? `
            <div class="activity-list">
              ${todayWorkouts.slice(0, 3).map(w=>{
                const best = bestSetOf(w);
                return `<div class="activity-row">
                  <div class="activity-icon">${icon('dumbbell')}</div>
                  <div class="activity-copy"><strong>${esc(w.exercise)}</strong><small>${w.sets.length} series${best ? ` · mejor ${best.reps}×${best.weight} kg` : ''}</small></div>
                  <div class="activity-val"><b>${fmtInt(w.sets.reduce((s,x)=>s + x.reps * x.weight, 0))}</b><span>kg vol.</span></div>
                </div>`;
              }).join('')}
            </div>
            <button type="button" class="link-btn" data-tab="historial" style="margin-top:8px">Ver historial ${icon('chevron')}</button>
          ` : `
            <div class="session-empty" style="padding:4px 0 2px">
              <p style="font-size:12px;color:var(--text-2)">Aún no registras entrenamiento hoy.</p>
              <p class="small" style="margin-top:4px">Tu próxima serie es el primer paso.</p>
            </div>
            <button type="button" class="btn btn-ghost btn-block" data-tab="registrar">${icon('plus')} Empezar sesión</button>
          `}
        </div>
      </div>

      <div class="quick-grid">
        <button type="button" class="quick-tile" data-tab="registrar"><span class="quick-icon">${icon('dumbbell')}</span><span><strong>Registrar</strong><small>Nueva serie</small></span></button>
        <button type="button" class="quick-tile" data-tab="historial"><span class="quick-icon">${icon('calendar')}</span><span><strong>Historial</strong><small>${state.workouts.length} registros</small></span></button>
        <button type="button" class="quick-tile" data-tab="progreso"><span class="quick-icon">${icon('chart')}</span><span><strong>Progreso</strong><small>Récords y tendencia</small></span></button>
        <button type="button" class="quick-tile" data-tab="nutricion"><span class="quick-icon">${icon('apple')}</span><span><strong>Nutrición</strong><small>${goals ? `${fmtInt(totals.cal)} / ${fmtInt(goals.calories)} kcal` : 'Configura tu plan'}</small></span></button>
      </div>

      <div class="home-grid equal">
        <div class="card">
          <div class="card-head"><h3>Nutrición de hoy</h3><button type="button" class="link-btn" data-tab="nutricion">Abrir ${icon('chevron')}</button></div>
          ${goals ? `
            <div class="balance-top" style="margin-bottom:12px;gap:14px">
              ${ringBlock(clamp(totals.cal / goals.calories * 100, 0, 100), fmtInt(totals.cal), 'kcal', { size:94, variant:'green', stroke:7 })}
              <div class="balance-copy">
                <div class="balance-score">${Math.min(999, Math.round(totals.cal / goals.calories * 100))}%<span>de tu meta</span></div>
                <p>${totals.meals.length ? `${plural(totals.meals.length, 'alimento registrado', 'alimentos registrados')} hoy.` : 'Aún no registras alimentos hoy.'}</p>
              </div>
            </div>
            <div class="macro-list">
              ${miniMacroRow('Proteína', totals.prot, goals.protein, 'prot')}
              ${miniMacroRow('Carbos', totals.carb, goals.carbs, 'carb')}
              ${miniMacroRow('Grasas', totals.fat, goals.fat, 'fat')}
            </div>
          ` : `<div class="session-empty">Añade tus datos en Nutrición para ver tus calorías y macros del día.</div><button type="button" class="btn btn-ghost btn-block" data-tab="nutricion">Completar perfil</button>`}
        </div>

        <div class="card">
          <div class="card-head"><h3>Actividad reciente</h3><button type="button" class="link-btn" data-tab="historial">Ver todo ${icon('chevron')}</button></div>
          ${recent.length ? `<div class="activity-list">
            ${recent.map(w=>`<button type="button" class="activity-row" data-tab="historial">
              <span class="activity-icon">${icon('dumbbell')}</span>
              <span class="activity-copy"><strong>${esc(w.exercise)}</strong><small>${fmtDate(w.date)} · ${w.bodyPart}</small></span>
              <span class="activity-val"><b>${w.sets.length}</b><span>series</span></span>
            </button>`).join('')}
          </div>` : `<div class="empty-state"><div class="empty-icon">${icon('dumbbell')}</div><h4>Tu primera sesión</h4><p>Registra un ejercicio para empezar a ver tu progreso.</p></div>`}
        </div>
      </div>

      <div class="card tip-card">
        <div class="tip-icon">${icon(tip.icon)}</div>
        <div class="tip-copy"><h4>${tip.title}</h4><p>${tip.text}</p></div>
      </div>
    </div>`;
}
function weekStripHTML(trainedDays){
  const today = todayISO();
  return `<div class="week-strip">${getWeekDays().map(d=>{
    const done = trainedDays.has(d.iso);
    const isToday = d.iso === today;
    const rest = !done && d.iso < today;
    return `<div class="day-pill ${done ? 'done' : ''} ${isToday ? 'today' : ''} ${rest ? 'rest' : ''}" title="${fmtDateFull(d.iso)}${done ? ' · Entrenado' : ''}">
      <span class="day-letter">${d.letter}</span>
      <span class="day-dot">${done ? icon('check') : d.day}</span>
    </div>`;
  }).join('')}</div>`;
}
function miniMacroRow(label, consumed, target, cls){
  const pct = clamp(consumed / Math.max(1, target) * 100, 0, 100);
  return `<div class="macro-row">
    <div class="macro-top"><b>${label}</b><span><b>${Math.round(consumed)}</b> / ${Math.round(target)} g</span></div>
    <div class="macro-track"><div class="macro-fill ${cls}" style="width:${pct}%"></div></div>
  </div>`;
}

/* ---------- Bienvenida ---------- */
function setWcError(step, message){
  const card = document.querySelector(`.welcome-card[data-step="${step}"]`);
  if(!card) return;
  card.querySelectorAll('.wc-error').forEach(el=>el.remove());
  if(!message) return;
  const div = document.createElement('div');
  div.className = 'wc-error';
  div.textContent = `⚠️ ${message}`;
  card.appendChild(div);
}
function openWelcome(editMode = false){
  welcomeEditMode = !!editMode;
  welcomeReturnTab = activeTab || 'inicio';
  welcomeStep = 1;
  $('#wcName').value = state.profile.name || '';
  $('#wcWeight').value = state.profile.weight || '';
  $('#wcHeight').value = state.profile.height || '';
  $('#wcAge').value = state.profile.age || '';
  $('#wcSex').value = state.profile.sex || 'M';
  $('#wcActivity').value = state.profile.activity || '1.55';
  $('#wcCloseBtn').hidden = !welcomeEditMode;
  renderWcExpPicker();
  renderWcFreqPicker();
  renderWcGoalPicker();
  updateWcStep();
  const screen = $('#welcomeScreen');
  screen.classList.add('show');
  screen.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  screen.scrollTop = 0;
}
function closeWelcome(){
  const screen = $('#welcomeScreen');
  screen.classList.remove('show');
  screen.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}
function updateWcStep(){
  $$('.welcome-card[data-step]').forEach(card=>card.classList.toggle('active', Number(card.dataset.step) === welcomeStep));
  $('#welcomeProgressBar').style.width = `${welcomeStep / 5 * 100}%`;
  $('#welcomeStepLabel').textContent = `Paso ${welcomeStep} de 5`;
  $('#wcBackBtn').hidden = welcomeStep === 1;
  $('#wcBackBtn').disabled = welcomeStep === 1;
  $('#wcNextBtn').innerHTML = welcomeStep === 5 ? `${icon('check')} Crear mi plan` : 'Continuar →';
  const footer = $('.welcome-footer');
  footer.classList.toggle('single', welcomeStep === 1);
  const stage = $('.welcome-stage');
  if(stage) stage.scrollTop = 0;
  $('#welcomeScreen').scrollTop = 0;
}
function renderWcExpPicker(){
  $('#wcExpPicker').innerHTML = Object.entries(EXPERIENCE).map(([key, exp])=>`
    <button type="button" class="choice-card ${state.profile.experience === key ? 'selected' : ''}" data-key="${key}">
      <span class="choice-icon">${exp.icon}</span>
      <span class="choice-copy"><strong>${exp.name}</strong><span class="choice-desc">${exp.desc}</span><span class="choice-meta">Base: ${exp.volMin}–${exp.volMax} series/semana</span></span>
      <span class="choice-check">${icon('check')}</span>
    </button>`).join('');
  $$('#wcExpPicker .choice-card').forEach(card=>{
    card.onclick = ()=>{
      state.profile.experience = card.dataset.key;
      renderWcExpPicker();
    };
  });
}
function renderWcFreqPicker(){
  $('#wcFreqPicker').innerHTML = Object.entries(FREQUENCIES).map(([key, freq])=>`
    <button type="button" class="choice-card ${state.profile.frequency === key ? 'selected' : ''}" data-key="${key}">
      <span class="choice-icon">${freq.icon}</span>
      <span class="choice-copy"><strong>${freq.name}</strong><span class="choice-desc">${freq.desc}</span><span class="choice-meta">Split: ${freq.split}</span></span>
      <span class="choice-check">${icon('check')}</span>
    </button>`).join('');
  $$('#wcFreqPicker .choice-card').forEach(card=>{
    card.onclick = ()=>{
      state.profile.frequency = card.dataset.key;
      renderWcFreqPicker();
    };
  });
}
function renderWcGoalPicker(){
  $('#wcGoalPicker').innerHTML = Object.entries(GOALS).map(([key, goal])=>`
    <button type="button" class="choice-card ${state.profile.goal === key ? 'selected' : ''}" data-key="${key}">
      <span class="choice-icon">🎯</span>
      <span class="choice-copy"><strong>${goal.name}</strong><span class="choice-desc">${goal.desc}</span><span class="choice-meta">${goal.factor === 1 ? '= TDEE' : goal.factor < 1 ? `Déficit ${Math.round((1 - goal.factor) * 100)}%` : `Superávit ${Math.round((goal.factor - 1) * 100)}%`} · ${goal.protKg} g/kg proteína</span></span>
      <span class="choice-check">${icon('check')}</span>
    </button>`).join('');
  $$('#wcGoalPicker .choice-card').forEach(card=>{
    card.onclick = ()=>{
      state.profile.goal = card.dataset.key;
      renderWcGoalPicker();
    };
  });
}
function finishWelcome(){
  if(!state.profile.name){ setWcError(5, 'Necesitamos tu nombre'); welcomeStep = 1; updateWcStep(); return; }
  state.onboarded = true;
  save();
  closeWelcome();
  renderAll();
  switchTab(welcomeEditMode && welcomeReturnTab ? welcomeReturnTab : 'inicio');
  toast(welcomeEditMode ? 'Perfil actualizado' : `¡Todo listo, ${state.profile.name}!`);
}
window.openWelcome = openWelcome;

/* ============================================================
   REGISTRAR SESIÓN
   ============================================================ */
function renderRegistrar(){
  const dateInput = $('#wDate');
  if(!dateInput.value) dateInput.value = todayISO();
  dateInput.max = todayISO();
  $('#todayBadge').innerHTML = `${icon('calendar')} ${fmtDate(todayISO())}`;

  fillExercisePicker();
  if(selectedExercise && !(state.exercises[selectedExercise.bodyPart] || []).includes(selectedExercise.name)){
    selectedExercise = null;
  }
  if(!selectedExercise){
    const recent = getRecentExercises(1)[0];
    if(recent) selectedExercise = { bodyPart:recent.bodyPart, name:recent.exercise };
  }
  updateExerciseUI();

  const container = $('#setsContainer');
  if(container && !container.children.length){
    addSetRow(); addSetRow(); addSetRow();
  }
  renderSessionSummary();
  renderRegistrarTip();
}
function fillExercisePicker(){
  const newExBody = $('#newExBody');
  if(newExBody) newExBody.innerHTML = MUSCLE_ORDER.map(m=>`<option>${m}</option>`).join('');
  const picker = $('#exercisePickerName');
  if(!picker) return;
  if(selectedExercise){
    picker.textContent = selectedExercise.name;
    $('#exercisePickerMeta').textContent = selectedExercise.bodyPart;
    $('#wExerciseSingle').value = `${selectedExercise.bodyPart}|||${selectedExercise.name}`;
  } else {
    picker.textContent = 'Elige un ejercicio';
    $('#exercisePickerMeta').textContent = 'Busca por grupo muscular';
    $('#wExerciseSingle').value = '';
  }
}
function updateExerciseUI(){
  fillExercisePicker();
  updateHints();
  updateSetNumbers();
  renderSessionSummary();
}
function openExercisePicker(){
  const recent = getRecentExercises(6);
  const body = `<div class="search-wrap">${icon('search')}<input type="text" id="exerciseSearch" placeholder="Buscar press, sentadilla, curl…" autocomplete="off" aria-label="Buscar ejercicio"></div>
    <div class="picker-list" id="exercisePickerList"></div>`;
  openSheet({
    title:'Elegir ejercicio',
    subtitle:'Toca uno para registrarlo en tu sesión',
    body,
    onMount(root){
      const input = $('#exerciseSearch', root);
      const list = $('#exercisePickerList', root);
      const paint = query => {
        const q = normalizeSearch(query);
        if(q){
          const matches = [];
          MUSCLE_ORDER.forEach(m=>{
            (state.exercises[m] || []).forEach(ex=>{
              if(normalizeSearch(ex).includes(q)) matches.push({ m, ex });
            });
          });
          list.innerHTML = matches.length
            ? `<div class="picker-group-label">${matches.length} resultado${matches.length === 1 ? '' : 's'}</div>${matches.map(item=>`
                <button type="button" class="picker-item" data-muscle="${esc(item.m)}" data-exercise="${esc(item.ex)}">
                  <span class="badge badge-soft">${esc(item.m)}</span><span class="picker-item-name">${esc(item.ex)}</span>${icon('chevron')}
                </button>`).join('')}`
            : `<div class="picker-empty">No encontramos ejercicios con “${esc(query)}”.</div>`;
        } else {
          list.innerHTML = `
            ${recent.length ? `<div class="picker-group-label">Recientes</div>${recent.map(item=>`
              <button type="button" class="picker-item" data-muscle="${esc(item.bodyPart)}" data-exercise="${esc(item.exercise)}">
                <span class="badge badge-soft">${esc(item.bodyPart)}</span><span class="picker-item-name">${esc(item.exercise)}</span>${icon('clock')}
              </button>`).join('')}` : ''}
            ${MUSCLE_ORDER.map(m=>{
              const exercises = state.exercises[m] || [];
              if(!exercises.length) return '';
              return `<div class="picker-group-label">${m}</div>${exercises.map(ex=>`
                <button type="button" class="picker-item" data-muscle="${esc(m)}" data-exercise="${esc(ex)}">
                  <span class="badge badge-soft">${esc(m)}</span><span class="picker-item-name">${esc(ex)}</span>${icon('chevron')}
                </button>`).join('')}`;
            }).join('')}`;
        }
      };
      paint('');
      input.addEventListener('input', ()=>paint(input.value));
      list.addEventListener('click', e=>{
        const btn = e.target.closest('[data-exercise]');
        if(!btn) return;
        selectedExercise = { bodyPart:btn.dataset.muscle, name:btn.dataset.exercise };
        closeSheet(true);
        updateExerciseUI();
        setTimeout(()=>{ const reps = $('.set-reps'); if(reps) reps.focus(); }, 180);
      });
    }
  });
}
function updateHints(){
  const auto = $('#autoMuscleHint');
  const lastHint = $('#lastSessionHint');
  const rir = $('#rirHint');
  if(!auto || !lastHint || !rir) return;
  if(!selectedExercise){
    auto.style.display = 'none';
    lastHint.style.display = 'none';
    rir.style.display = 'none';
    return;
  }
  const { bodyPart, name } = selectedExercise;
  const weeklySets = calcWeeklyVolume()[bodyPart]?.sets || 0;
  auto.style.display = 'block';
  auto.className = 'hint-card hint-info';
  auto.innerHTML = `${icon('target')} Se guardará en <b>${esc(bodyPart)}</b> · ${weeklySets} series esta semana`;

  const history = state.workouts.filter(w=>w.exercise === name).sort((a,b)=>b.date.localeCompare(a.date));
  const last = history[0] || null;
  if(last && last.sets.length){
    lastHint.style.display = 'block';
    lastHint.className = 'hint-card hint-card-last';
    lastHint.innerHTML = `<div class="hint-head"><span>Última vez · ${fmtDateFull(last.date)}</span><button type="button" class="hint-link" data-action="repeat-last">Repetir sesión ${icon('chevron')}</button></div>
      <div class="set-chips">${last.sets.map((s,i)=>`<span class="chip-set ${s.isDrop ? 'drop' : ''}">S${i + 1}: <b>${s.reps}×${s.weight}</b> kg${s.isDrop ? ' 🔥' : ''}</span>`).join('')}</div>`;
  } else {
    lastHint.style.display = 'none';
  }

  rir.style.display = 'block';
  const isHeavy = HEAVY_EXERCISES.includes(name);
  if(last && last.sets.length){
    const maxWeight = Math.max(...last.sets.map(s=>Number(s.weight) || 0));
    const atMax = last.sets.filter(s=>(Number(s.weight) || 0) === maxWeight);
    const maxReps = Math.max(...atMax.map(s=>Number(s.reps) || 0));
    if(maxReps >= 10 && isHeavy){
      const increment = maxWeight >= 100 ? 5 : 2.5;
      rir.className = 'hint-card hint-success';
      rir.innerHTML = `${icon('sparkles')} <b>Hora de progresar.</b> Hiciste ${maxReps} reps a ${maxWeight} kg. Prueba <b>${round(maxWeight + increment, 1)} kg</b> (+${increment} kg) con RIR 2–3.`;
    } else if(maxReps >= 15 && !isHeavy){
      rir.className = 'hint-card hint-success';
      rir.innerHTML = `${icon('sparkles')} <b>Hora de progresar.</b> Hiciste ${maxReps} reps a ${maxWeight} kg. Sube a <b>${round(maxWeight + 1.25, 2)} kg</b> y busca RIR 1–2.`;
    } else if(isHeavy){
      rir.className = 'hint-card';
      rir.innerHTML = `${icon('info')} <b>RIR sugerido (pesado):</b> deja 2–3 reps en reserva. Mantén ${maxWeight} kg o sube muy poco.`;
    } else {
      rir.className = 'hint-card hint-warn';
      rir.innerHTML = `${icon('info')} <b>RIR sugerido (aislamiento):</b> apunta a RIR 1–2 con ${maxWeight} kg. En la última serie puedes llegar al fallo.`;
    }
  } else {
    rir.className = 'hint-card';
    rir.innerHTML = isHeavy
      ? `${icon('info')} <b>Sugerencia RIR (pesado):</b> deja 2–3 reps en reserva. Prioriza técnica y sobrecarga progresiva.`
      : `${icon('info')} <b>Sugerencia RIR (aislamiento):</b> busca RIR 1–2. En la última serie puedes llegar al fallo.`;
  }
}
function addSetRow(reps = '', weight = '', isDrop = false){
  const container = $('#setsContainer');
  if(!container) return;
  const row = document.createElement('div');
  row.className = 'set-row';
  row.innerHTML = `
    <span class="set-num"></span>
    <input type="text" class="set-reps" inputmode="numeric" pattern="[0-9]*" placeholder="Reps" value="${esc(reps)}" autocomplete="off" aria-label="Repeticiones">
    <input type="text" class="set-weight" inputmode="decimal" pattern="[0-9.,]*" placeholder="Kg" value="${esc(weight)}" autocomplete="off" aria-label="Peso en kg">
    <button type="button" class="drop-toggle ${isDrop ? 'on' : ''}" aria-pressed="${isDrop ? 'true' : 'false'}" title="Marcar como dropset" aria-label="Marcar como dropset">${icon('flame')}</button>
    <button type="button" class="row-remove" aria-label="Eliminar serie">${icon('x')}</button>`;
  const dropBtn = row.querySelector('.drop-toggle');
  dropBtn.onclick = ()=>{
    const on = dropBtn.classList.toggle('on');
    dropBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    renderSessionSummary();
  };
  row.querySelector('.row-remove').onclick = ()=>{
    row.remove();
    updateSetNumbers();
    renderSessionSummary();
  };
  container.appendChild(row);
  updateSetNumbers();
  renderSessionSummary();
}
function updateSetNumbers(){
  $$('#setsContainer .set-row').forEach((row, i)=>{
    row.querySelector('.set-num').textContent = i + 1;
    row.querySelector('.set-reps')?.setAttribute('aria-label', `Repeticiones serie ${i + 1}`);
    row.querySelector('.set-weight')?.setAttribute('aria-label', `Peso serie ${i + 1}`);
  });
}
function collectSets(){
  const sets = [];
  $$('#setsContainer .set-row').forEach(row=>{
    const reps = parseNum(row.querySelector('.set-reps').value);
    const weight = parseNum(row.querySelector('.set-weight').value);
    const isDrop = row.querySelector('.drop-toggle').classList.contains('on');
    if(!isNaN(reps) && reps > 0){
      sets.push({ reps, weight:isNaN(weight) ? 0 : weight, isDrop });
    }
  });
  return sets;
}
function renderSessionSummary(){
  const box = $('#sessionSummary');
  if(!box) return;
  const sets = collectSets();
  const volume = sets.reduce((s,x)=>s + x.reps * x.weight, 0);
  const best = sets.reduce((b,s)=> (s.weight * s.reps > (b?.weight * b?.reps || 0) ? s : b), null);
  const drops = sets.filter(s=>s.isDrop).length;
  const weekly = selectedExercise ? (calcWeeklyVolume()[selectedExercise.bodyPart]?.sets || 0) : 0;
  box.innerHTML = `
    <div class="summary-hero">
      <div class="summary-badge">${icon('dumbbell')}</div>
      <div><h3>${selectedExercise ? esc(selectedExercise.name) : 'Resumen de la sesión'}</h3>
      <p>${selectedExercise ? `${esc(selectedExercise.bodyPart)} · ${weekly} series esta semana` : 'Elige un ejercicio para empezar'}</p></div>
    </div>
    ${sets.length ? `<div class="summary-rows">
      <div class="summary-row"><span>Series</span><b>${sets.length}</b></div>
      <div class="summary-row"><span>Volumen</span><b>${fmtInt(volume)}<em>kg</em></b></div>
      <div class="summary-row"><span>Mejor serie</span><b>${best ? `${best.reps}×${best.weight}<em>kg</em>` : '—'}</b></div>
      <div class="summary-row"><span>Dropsets</span><b style="${drops ? 'color:var(--orange)' : ''}">${drops || '—'}</b></div>
    </div>` : `<p class="session-empty">Añade reps y peso para ver el volumen de la sesión en tiempo real.</p>`}`;
}
function renderRegistrarTip(){
  const box = $('#registrarTip');
  if(!box) return;
  const tip = coachTip();
  box.innerHTML = `<div class="tip-icon">${icon(tip.icon)}</div><div class="tip-copy"><h4>${tip.title}</h4><p>${tip.text}</p></div>`;
}
function repeatLastSession(){
  if(!selectedExercise) return;
  const last = state.workouts.filter(w=>w.exercise === selectedExercise.name).sort((a,b)=>b.date.localeCompare(a.date))[0];
  if(!last || !last.sets.length){ toast('Aún no hay una sesión anterior de este ejercicio', 'info'); return; }
  const container = $('#setsContainer');
  container.innerHTML = '';
  last.sets.slice(0, 10).forEach(s=>addSetRow(s.reps, s.weight, !!s.isDrop));
  updateSetNumbers();
  renderSessionSummary();
  toast('Series de la última sesión cargadas', 'info');
}
function saveWorkout(){
  const date = $('#wDate').value;
  if(!date){ toast('Selecciona una fecha', 'error'); return; }
  if(date > todayISO()){ toast('No puedes registrar una fecha futura', 'error'); return; }
  if(!selectedExercise){ toast('Elige un ejercicio', 'error'); openExercisePicker(); return; }
  const sets = collectSets();
  if(!sets.length){ toast('Añade al menos una serie con reps', 'error'); return; }

  const previous = state.workouts.filter(w=>w.exercise === selectedExercise.name);
  const prevMax = previous.reduce((max,w)=>Math.max(max, ...w.sets.map(s=>Number(s.weight) || 0)), 0);
  const newMax = Math.max(...sets.map(s=>Number(s.weight) || 0));
  const isPR = previous.length > 0 && newMax > prevMax;

  state.workouts.push({
    id: Date.now(),
    date,
    bodyPart: selectedExercise.bodyPart,
    exercise: selectedExercise.name,
    sets,
    createdAt: new Date().toISOString()
  });
  save();

  if(isPR){
    toast(`Sesión guardada · Nuevo récord: ${newMax} kg en ${selectedExercise.name}`);
  } else {
    toast(`Sesión guardada en ${selectedExercise.bodyPart}`);
  }

  const saveBtn = $('#saveBtn');
  const original = saveBtn.innerHTML;
  saveBtn.classList.add('is-success');
  saveBtn.innerHTML = `${icon('check')} Guardado`;
  setTimeout(()=>{
    saveBtn.classList.remove('is-success');
    saveBtn.innerHTML = original;
  }, 1600);

  const container = $('#setsContainer');
  container.innerHTML = '';
  addSetRow(); addSetRow(); addSetRow();
  updateHints();
  renderSessionSummary();
  renderHome();
  renderGreeting();
}

/* ============================================================
   HISTORIAL
   ============================================================ */
function renderFilters(){
  const years = [...new Set(state.workouts.map(w=>w.date.split('-')[0]))].sort().reverse();
  const months = [...new Set(state.workouts.map(w=>w.date.split('-')[1]))].sort();
  const fy = $('#filterYear');
  const fm = $('#filterMonth');
  const currentYear = fy.value;
  const currentMonth = fm.value;
  fy.innerHTML = '<option value="">Todos</option>' + years.map(y=>`<option value="${y}">${y}</option>`).join('');
  fm.innerHTML = '<option value="">Todos</option>' + months.map(m=>`<option value="${m}">${MONTHS_LONG[Number(m) - 1]}</option>`).join('');
  if([...fy.options].some(o=>o.value === currentYear)) fy.value = currentYear;
  if([...fm.options].some(o=>o.value === currentMonth)) fm.value = currentMonth;
}
function renderHistory(){
  processWeeklyArchives();
  renderFilters();
  const archivesContainer = $('#weeklyArchivesContainer');
  const countEl = $('#historyCount');
  const totalSessions = state.workouts.length;
  if(countEl) countEl.textContent = `${totalSessions} ${totalSessions === 1 ? 'sesión' : 'sesiones'}`;

  const archives = [...(state.weeklyArchives || [])].sort((a,b)=>b.start.localeCompare(a.start));
  archivesContainer.innerHTML = archives.length ? `
    <details class="card details-card" style="margin-bottom:14px">
      <summary><span>${icon('calendar')} Resúmenes semanales</span>${icon('chevron','chev')}</summary>
      <div class="details-body">
        <div class="archive-list">
          ${archives.map(a=>`<div class="archive-row">
            <span><b>${fmtDate(a.start)} – ${fmtDate(a.end)}</b><br><small class="muted">${a.days} días · ${a.totalSets} series</small></span>
            <span>${fmtInt(a.totalVol)} kg</span>
          </div>`).join('')}
        </div>
      </div>
    </details>` : '';

  const fy = $('#filterYear').value;
  const fm = $('#filterMonth').value;
  let list = [...state.workouts].sort((a,b)=>b.date.localeCompare(a.date) || b.id - a.id);
  if(fy) list = list.filter(w=>w.date.startsWith(fy));
  if(fm) list = list.filter(w=>w.date.split('-')[1] === fm);

  const container = $('#historyContainer');
  if(!list.length){
    container.innerHTML = `<div class="empty-state">
      <div class="empty-icon">${icon('calendar')}</div>
      <h4>Sin registros</h4>
      <p>${state.workouts.length ? 'No hay sesiones con estos filtros.' : 'Registra tu primera sesión para empezar tu historial.'}</p>
    </div>`;
    return;
  }

  const groups = {};
  list.forEach(w=>{ (groups[w.date] ||= []).push(w); });
  container.innerHTML = Object.entries(groups).map(([date, items])=>{
    const totalVol = items.reduce((s,w)=>s + w.sets.reduce((a,x)=>a + x.reps * x.weight, 0), 0);
    const totalSets = items.reduce((s,w)=>s + w.sets.length, 0);
    const drops = items.reduce((s,w)=>s + w.sets.filter(x=>x.isDrop).length, 0);
    const d = fromISO(date);
    return `<div class="history-day">
      <div class="history-day-head">
        <div class="history-date">${icon('calendar')} ${fmtDateFull(date)} <small>${DAY_SHORT[(d.getDay() + 6) % 7]}</small></div>
        <div class="history-totals"><span><b>${totalSets}</b> series</span><span><b>${fmtInt(totalVol)}</b> kg</span>${drops ? `<span><b>${drops}</b> 🔥</span>` : ''}</div>
      </div>
      ${items.map(w=>{
        const vol = w.sets.reduce((s,x)=>s + x.reps * x.weight, 0);
        const dropCount = w.sets.filter(s=>s.isDrop).length;
        return `<div class="workout-card">
          <div class="workout-top">
            <div style="min-width:0">
              <div class="workout-name">${esc(w.exercise)}</div>
              <div class="workout-meta">
                <span class="badge badge-soft">${esc(w.bodyPart)}</span>
                <span class="badge badge-blue">${w.sets.length} series</span>
                ${dropCount ? `<span class="badge badge-orange">${dropCount} dropset${dropCount === 1 ? '' : 's'}</span>` : ''}
              </div>
            </div>
            <button type="button" class="icon-action" data-action="delete-workout" data-id="${w.id}" aria-label="Eliminar registro">${icon('trash')}</button>
          </div>
          <div class="set-chips">
            ${w.sets.map((s,i)=>`<span class="chip-set ${s.isDrop ? 'drop' : ''}">S${i + 1}: <b>${s.reps}×${s.weight}</b> kg${s.isDrop ? ' 🔥' : ''}</span>`).join('')}
          </div>
          <div class="muted small" style="margin-top:7px">Volumen: ${fmtInt(vol)} kg</div>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}
async function deleteWorkout(id){
  const ok = await confirmDialog({
    title:'Eliminar registro',
    message:'Esta sesión se eliminará del historial y de tus estadísticas. No se puede deshacer.',
    confirmText:'Eliminar',
    danger:true
  });
  if(!ok) return;
  state.workouts = state.workouts.filter(w=>w.id !== id);
  save();
  renderHistory();
  renderHome();
  renderProgress();
  toast('Registro eliminado', 'info');
}

/* ============================================================
   PROGRESO
   ============================================================ */
function getExerciseEntries(){
  const stats = {};
  state.workouts.forEach(w=>{ stats[w.exercise] = (stats[w.exercise] || 0) + 1; });
  const library = [];
  const seen = new Set();
  MUSCLE_ORDER.forEach(m=>{
    (state.exercises[m] || []).forEach(ex=>{
      const value = `${m}|||${ex}`;
      if(seen.has(value)) return;
      seen.add(value);
      library.push({ muscle:m, exercise:ex, count:stats[ex] || 0 });
    });
  });
  const withHistory = library.filter(item=>item.count);
  const without = library.filter(item=>!item.count);
  state.workouts.forEach(w=>{
    const value = `${w.bodyPart}|||${w.exercise}`;
    if(seen.has(value)) return;
    seen.add(value);
    withHistory.push({ muscle:w.bodyPart, exercise:w.exercise, count:stats[w.exercise] || 1 });
  });
  return { withHistory, without };
}
function populateProgressSelect(){
  const sel = $('#progressExercise');
  if(!sel) return '';
  const current = sel.value;
  const { withHistory, without } = getExerciseEntries();
  const options = [];
  if(withHistory.length){
    options.push(`<optgroup label="Con registros">${withHistory.map(item=>`<option value="${esc(item.muscle)}|||${esc(item.exercise)}">${esc(item.muscle)} · ${esc(item.exercise)}</option>`).join('')}</optgroup>`);
  }
  if(without.length){
    options.push(`<optgroup label="Sin registros">${without.map(item=>`<option value="${esc(item.muscle)}|||${esc(item.exercise)}">${esc(item.muscle)} · ${esc(item.exercise)}</option>`).join('')}</optgroup>`);
  }
  sel.innerHTML = options.join('') || '<option value="">Sin ejercicios</option>';
  if(current && [...sel.options].some(o=>o.value === current)) sel.value = current;
  else if(withHistory.length) sel.value = `${withHistory[0].muscle}|||${withHistory[0].exercise}`;
  return sel.value;
}
let chartSeq = 0;
function lineChart(values, labels, { variant = 'accent', unit = '' } = {}){
  const n = values.length;
  if(!n) return `<div class="chart-empty">Sin datos para mostrar</div>`;
  const W = 600, H = 210;
  const pad = { l:10, r:10, t:16, b:14 };
  const min = Math.min(...values);
  const max = Math.max(...values);
  let lo = min, hi = max;
  if(hi === lo){
    const delta = Math.max(1, Math.abs(max) * .1);
    lo = Math.max(0, min - delta);
    hi = max + delta;
  } else {
    const extra = (hi - lo) * .18;
    hi += extra;
    lo = Math.max(0, lo - extra);
  }
  const xFor = i => n === 1 ? W / 2 : pad.l + i * (W - pad.l - pad.r) / (n - 1);
  const yFor = v => H - pad.b - ((v - lo) / (hi - lo)) * (H - pad.t - pad.b);
  const pts = values.map((v,i)=>({ x:xFor(i), y:yFor(v), v, label:labels[i] || '' }));
  let path = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for(let i=1;i<pts.length;i++){
    const prev = pts[i - 1];
    const cur = pts[i];
    const mid = (prev.x + cur.x) / 2;
    path += ` C ${mid.toFixed(1)} ${prev.y.toFixed(1)} ${mid.toFixed(1)} ${cur.y.toFixed(1)} ${cur.x.toFixed(1)} ${cur.y.toFixed(1)}`;
  }
  const area = `${path} L ${pts[pts.length - 1].x.toFixed(1)} ${H - pad.b} L ${pts[0].x.toFixed(1)} ${H - pad.b} Z`;
  const grid = [0,1,2,3].map(i=>{
    const y = pad.t + i * (H - pad.t - pad.b) / 3;
    return `<line class="chart-grid-line" x1="${pad.l}" y1="${y.toFixed(1)}" x2="${W - pad.r}" y2="${y.toFixed(1)}"/>`;
  }).join('');
  const colors = {
    accent:['#6d8dff','#a78bfa'],
    orange:['#fb923c','#fbbf24'],
    purple:['#a78bfa','#c084fc'],
    green:['#34d399','#10b981']
  }[variant] || ['#6d8dff','#a78bfa'];
  const id = `chart${++chartSeq}`;
  const dots = pts.map((p,i)=>`<circle class="chart-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${i === pts.length - 1 ? 4.5 : 3}" fill="${i === pts.length - 1 ? colors[1] : colors[0]}"><title>${esc(p.label)}: ${p.v}${unit}</title></circle>`).join('');
  const idxSet = new Set();
  if(n <= 4){ for(let i=0;i<n;i++) idxSet.add(i); }
  else { [0, Math.round((n - 1) / 3), Math.round(2 * (n - 1) / 3), n - 1].forEach(i=>idxSet.add(i)); }
  const xLabels = [...idxSet].sort((a,b)=>a-b).map(i=>`<span>${esc(labels[i] || '')}</span>`).join('');
  return `<div class="chart-shell">
    <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfica de progreso">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${colors[0]}" stop-opacity=".32"/><stop offset="1" stop-color="${colors[0]}" stop-opacity="0"/></linearGradient></defs>
      ${grid}
      <path d="${area}" fill="url(#${id})"/>
      <path class="chart-line" d="${path}" stroke="${colors[0]}"/>
      ${dots}
    </svg>
    <div class="chart-x">${xLabels}</div>
  </div>`;
}
function chartCard(title, subtitle, values, labels, variant, unit, badgeUnit){
  const last = values[values.length - 1] || 0;
  const lastDisplay = Number.isInteger(last) ? fmtInt(last) : fmtDec(last, 1);
  const prev = values.length > 1 ? values[values.length - 2] : null;
  const diff = prev === null ? null : last - prev;
  const badge = diff === null ? '' : `<span class="badge ${diff > 0 ? 'badge-green' : diff < 0 ? 'badge-red' : 'badge-soft'}">${diff > 0 ? '+' : ''}${Number.isInteger(diff) ? fmtInt(diff) : fmtDec(diff, 1)}${badgeUnit || unit}</span>`;
  return `<div class="card chart-card">
    <div class="chart-head">
      <div><h3>${title}</h3><p>${subtitle}</p></div>
      <div class="chart-meta"><span class="chart-current">${lastDisplay}${unit}</span>${badge}</div>
    </div>
    ${lineChart(values, labels, { variant, unit })}
  </div>`;
}
function renderProgress(){
  const value = populateProgressSelect();
  const container = $('#progressContent');
  if(!container) return;
  if(!value){
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${icon('chart')}</div><h4>Sin ejercicios</h4><p>Agrega un ejercicio en la biblioteca para empezar.</p></div>`;
    return;
  }
  const [bodyPart, exercise] = value.split('|||');
  const sessions = state.workouts.filter(w=>w.exercise === exercise).sort((a,b)=>a.date.localeCompare(b.date));
  if(!sessions.length){
    container.innerHTML = `<div class="empty-state">
      <div class="empty-icon">${icon('dumbbell')}</div>
      <h4>Aún no hay registros de ${esc(exercise)}</h4>
      <p>Cuando guardes una sesión verás aquí tus récords, tendencias y gráficas.</p>
      <button type="button" class="btn btn-ghost" data-tab="registrar" style="margin-top:12px">${icon('plus')} Registrar ahora</button>
    </div>`;
    return;
  }
  const byDate = {};
  sessions.forEach(w=>{
    const day = byDate[w.date] ||= { sets:[], maxWeight:0, volume:0, totalReps:0, drops:0, est1RM:0 };
    w.sets.forEach(s=>{
      day.sets.push(s);
      day.maxWeight = Math.max(day.maxWeight, Number(s.weight) || 0);
      day.volume += (Number(s.reps) || 0) * (Number(s.weight) || 0);
      day.totalReps += Number(s.reps) || 0;
      if(s.isDrop) day.drops++;
      if(s.weight > 0 && s.reps > 0) day.est1RM = Math.max(day.est1RM, s.weight * (1 + s.reps / 30));
    });
  });
  const list = Object.keys(byDate).sort().map(date=>({ date, ...byDate[date] }));
  const firstN = list.slice(0, Math.min(4, list.length));
  const lastN = list.slice(-Math.min(4, list.length));
  const avg = arr => arr.reduce((s,x)=>s + x.totalReps, 0) / arr.length;
  const diffReps = Math.round((avg(lastN) - avg(firstN)) * 10) / 10;
  const diffWeight = Math.round((lastN.reduce((s,x)=>s + x.maxWeight, 0) / lastN.length - firstN.reduce((s,x)=>s + x.maxWeight, 0) / firstN.length) * 10) / 10;
  const recordWeight = Math.max(...list.map(x=>x.maxWeight));
  const recordReps = Math.max(...list.map(x=>x.totalReps));
  const totalDrops = list.reduce((s,x)=>s + x.drops, 0);
  const best1RM = Math.max(...list.map(x=>x.est1RM));
  const totalVolume = list.reduce((s,x)=>s + x.volume, 0);
  const last = list[list.length - 1];
  const trend = list.length > 1 ? last.totalReps - list[list.length - 2].totalReps : 0;
  const labels = list.map(x=>fmtDate(x.date));

  container.innerHTML = `
    <div class="progress-hero" style="margin-bottom:12px">
      <div style="min-width:0;flex:1">
        <span class="badge badge-blue">${esc(bodyPart)}</span>
        <h3>${esc(exercise)}</h3>
        <p>${list.length} sesiones · última ${fmtDateFull(last.date)}</p>
        <div class="stats-grid" style="margin-top:12px">
          ${statTile(`${fmtInt(recordWeight)}`, 'Récord peso', 'kg', 'var(--orange)')}
          ${statTile(recordReps, 'Récord reps', '', 'var(--purple)')}
          ${statTile(`${fmtInt(best1RM)}`, '1RM estimado', 'kg', 'var(--green)')}
        </div>
      </div>
    </div>

    <div class="progress-stats" style="margin-bottom:12px">
      ${statTile(list.length, 'Sesiones')}
      ${statTile(fmtInt(totalVolume), 'Volumen total', 'kg')}
      ${statTile(totalDrops, 'Dropsets', '', 'var(--orange)')}
      ${statTile(`${diffReps >= 0 ? '+' : ''}${fmtDec(diffReps, 1)}`, 'Reps de progreso', '', diffReps >= 0 ? 'var(--green)' : 'var(--red)')}
      ${statTile(`${diffWeight >= 0 ? '+' : ''}${fmtDec(diffWeight, 1)}`, 'Peso de progreso', 'kg', diffWeight >= 0 ? 'var(--green)' : 'var(--red)')}
      ${statTile(trend > 0 ? `+${trend}` : `${trend}`, 'Tendencia reps', '', trend > 0 ? 'var(--green)' : trend < 0 ? 'var(--red)' : 'var(--text-2)')}
    </div>

    ${chartCard('Peso máximo', 'Progresión de carga por sesión', list.map(x=>Math.round(x.maxWeight * 10) / 10), labels, 'orange', ' kg', ' kg')}
    ${chartCard('Volumen', 'Carga total movida en la sesión', list.map(x=>Math.round(x.volume)), labels, 'accent', ' kg', ' kg')}
    ${chartCard('Repeticiones', 'Trabajo total por sesión', list.map(x=>x.totalReps), labels, 'purple', ' reps', '')}
  `;
}

/* ============================================================
   VOLUMEN SEMANAL
   ============================================================ */
function buildSuggestedRoutine(freq){
  if(freq === '2-3') return `<b>Full Body (A/B/A)</b><br><br>• <b>Día A:</b> Sentadilla · Press banca · Remo con barra · Press militar · Curl · Core<br>• <b>Día B:</b> Peso muerto rumano · Dominadas · Fondos · Elevaciones laterales · Tríceps · Core<br>• <b>Día C (opcional):</b> Prensa · Press inclinado · Jalón al pecho · Pájaros · Bíceps · Core`;
  if(freq === '4') return `<b>Torso / Pierna (4 días)</b><br><br>• <b>Día 1 · Torso empuje:</b> Press banca · Press inclinado · Press militar · Elevaciones laterales · Tríceps<br>• <b>Día 2 · Piernas:</b> Sentadilla · Prensa · Curl femoral · Hip thrust · Gemelos<br>• <b>Día 3 · Torso tirón:</b> Dominadas · Remo con barra · Jalón · Remo con mancuerna · Bíceps<br>• <b>Día 4 · Piernas + core:</b> Peso muerto rumano · Extensión de cuádriceps · Zancadas · Gemelos · Core`;
  if(freq === '5') return `<b>Push / Pull / Legs + Torso (5 días)</b><br><br>• <b>Día 1 · Push:</b> Press banca · Press inclinado · Press militar · Elevaciones laterales · Tríceps<br>• <b>Día 2 · Pull:</b> Dominadas · Remo con barra · Jalón · Remo con mancuerna · Bíceps<br>• <b>Día 3 · Legs:</b> Sentadilla · Prensa · Curl femoral · Hip thrust · Gemelos<br>• <b>Día 4 · Torso:</b> Fondos · Press inclinado · Remo · Pájaros · Brazos<br>• <b>Día 5 · Piernas + core:</b> Peso muerto rumano · Extensión de cuádriceps · Gemelos · Core`;
  return `<b>Push / Pull / Legs ×2 (6 días)</b><br><br>• <b>Día 1 · Push A:</b> Press banca · Press inclinado · Fondos · Elevaciones laterales · Tríceps<br>• <b>Día 2 · Pull A:</b> Dominadas · Remo con barra · Remo con mancuerna · Curl · Core<br>• <b>Día 3 · Legs A:</b> Sentadilla · Prensa · Curl femoral · Gemelos · Core<br>• <b>Día 4 · Push B:</b> Press militar · Aperturas · Fondos · Pájaros · Tríceps<br>• <b>Día 5 · Pull B:</b> Jalón · Remo en polea · Face pull · Curl alterno · Core<br>• <b>Día 6 · Legs B:</b> Peso muerto rumano · Hip thrust · Zancadas · Gemelos`;
}
function renderVolume(){
  processWeeklyArchives();
  const container = $('#volumeContent');
  if(!container) return;
  const vol = calcWeeklyVolume();
  const expKey = state.profile.experience || 'principiante';
  const freqKey = state.profile.frequency || '4';
  const exp = EXPERIENCE[expKey];
  const freq = FREQUENCIES[freqKey];
  const { start, end } = getWeekRange();
  const weekStats = getWeekWorkoutStats();
  const targetDays = freq.days;
  const alerts = [];
  const totalSets = Object.values(vol).reduce((s,v)=>s + v.sets, 0);
  const totalDrops = Object.values(vol).reduce((s,v)=>s + v.drops, 0);

  MUSCLE_ORDER.forEach(m=>{
    const sets = vol[m]?.sets || 0;
    const zone = getVolumeZone(sets, expKey, freqKey, m);
    const range = getVolumeRange(expKey, freqKey, m);
    if(zone.label === 'Excesivo') alerts.push({ type:'red', msg:`<b>${m}</b>: ${sets} series semanales. Máximo recomendado: ${range.volMax}.` });
    if(zone.label === 'Bajo' && sets > 0) alerts.push({ type:'orange', msg:`<b>${m}</b>: solo ${sets} series. Óptimo: ${range.volMin}–${range.volMax}.` });
    if(vol[m]){
      Object.entries(vol[m].sessions).forEach(([date, sessionSets])=>{
        if(sessionSets > 8 && MUSCLE_VOL_MULT[m] >= .8) alerts.push({ type:'orange', msg:`El ${fmtDate(date)} hiciste <b>${sessionSets} series de ${m}</b> en una sola sesión.` });
      });
    }
  });
  if(!totalSets) alerts.push({ type:'orange', msg:'Aún no registras series esta semana. Empieza con una sesión y aquí verás el análisis de tu volumen.' });
  else if(!alerts.length) alerts.push({ type:'green', msg:'Tu volumen semanal está dentro de los rangos óptimos. Sigue así.' });

  const routineMode = state.profile.routineMode || 'suggested';
  let builder = '';
  if(routineMode === 'custom'){
    if(!Array.isArray(state.profile.customRoutine)) state.profile.customRoutine = [];
    if(!state.profile.customRoutine.length){
      builder = `<div class="routine-empty">Aún no tienes días. Crea tu primera sesión para armar tu rutina.</div>`;
    } else {
      builder = state.profile.customRoutine.map((day, dIdx)=>{
        const allExercises = MUSCLE_ORDER.flatMap(m=>(state.exercises[m] || []).map(ex=>({ m, ex })));
        return `<div class="routine-day">
          <div class="routine-day-head">
            <b>${esc(day.name || `Día ${dIdx + 1}`)}</b>
            <button type="button" class="icon-action" data-action="remove-routine-day" data-index="${dIdx}" aria-label="Eliminar día">${icon('trash')}</button>
          </div>
          <div>
            ${(day.exercises || []).length ? (day.exercises || []).map((ex, eIdx)=>`<div class="routine-ex-row">
              <span>${esc(ex.name)}</span>
              <span>${esc(ex.sets)} × ${esc(ex.reps)}
                <button type="button" class="icon-action" style="width:22px;height:22px" data-action="remove-routine-ex" data-index="${dIdx}" data-ex="${eIdx}" aria-label="Quitar ejercicio">${icon('x')}</button>
              </span>
            </div>`).join('') : `<div class="routine-empty">Sin ejercicios todavía.</div>`}
          </div>
          <div class="routine-add-ex">
            <select id="rExSel_${dIdx}" aria-label="Ejercicio">
              ${allExercises.map(item=>`<option value="${esc(item.ex)}">${esc(item.ex)}</option>`).join('')}
            </select>
            <input type="text" id="rExSets_${dIdx}" inputmode="numeric" placeholder="Sets" aria-label="Series">
            <input type="text" id="rExReps_${dIdx}" placeholder="Reps" aria-label="Repeticiones">
            <button type="button" class="btn btn-soft" data-action="add-routine-ex" data-index="${dIdx}" aria-label="Añadir ejercicio">${icon('plus')}</button>
          </div>
        </div>`;
      }).join('');
    }
    builder += `<button type="button" class="btn btn-ghost btn-block" data-action="add-routine-day">${icon('plus')} Añadir día</button>`;
  }

  container.innerHTML = `
    <div class="view-head">
      <div><p class="eyebrow">Analítica</p><h2>Volumen semanal</h2></div>
      <span class="badge badge-soft">${exp.icon} ${exp.name}</span>
    </div>

    <div class="card" style="margin-bottom:12px">
      <div class="vol-summary">
        <div style="display:flex;align-items:center;gap:15px">
          <div class="ring-wrap" style="width:96px;height:96px">
            ${ringSVG(clamp(weekStats.days.size / targetDays * 100, 0, 100), 96, 'accent', 8)}
            <div class="ring-center"><strong>${weekStats.days.size}/${targetDays}</strong><span>días</span></div>
          </div>
          <div>
            <h3 style="font-size:15px;margin-bottom:2px">Semana actual</h3>
            <p class="muted small">${fmtDate(start)} – ${fmtDate(end)}</p>
            <p class="small" style="color:var(--text-3);margin-top:4px">${freq.split} · ${totalSets} series</p>
          </div>
        </div>
        <div class="stats-grid">
          ${statTile(totalSets, 'Series')}
          ${statTile(totalDrops, 'Dropsets', '', 'var(--orange)')}
          ${statTile(Object.keys(vol).length, 'Grupos')}
          ${statTile(weekStats.list.length, 'Sesiones')}
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:12px">
      <div class="card-head"><h3>Alertas</h3><span class="muted small">Volumen y recuperación</span></div>
      ${alerts.map(a=>`<div class="alert alert-${a.type}">${a.msg}</div>`).join('')}
    </div>

    <div class="card" style="margin-bottom:12px">
      <div class="card-head"><h3>Series por grupo</h3><span class="muted small">Rango: ${exp.volMin}–${exp.volMax} base</span></div>
      <div class="muscle-list">
        ${MUSCLE_ORDER.map(m=>{
          const sets = vol[m]?.sets || 0;
          const drops = vol[m]?.drops || 0;
          const zone = getVolumeZone(sets, expKey, freqKey, m);
          const range = getVolumeRange(expKey, freqKey, m);
          const width = clamp(sets / (range.volMax * 1.35) * 100, 0, 100);
          return `<div class="muscle-row">
            <div class="muscle-row-top">
              <b>${m}${drops ? ` <span style="color:var(--orange);font-size:10px">🔥 ${drops}</span>` : ''}</b>
              <span class="muscle-count">${sets} / ${range.volMin}–${range.volMax} · <span class="badge ${zone.cls}" style="font-size:8.5px;padding:1px 6px">${zone.label}</span></span>
            </div>
            <div class="muscle-track"><div class="muscle-fill" style="width:${width}%;background:${zone.color}"></div></div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h3>Mi rutina</h3><span class="muted small">${freq.name}</span></div>
      <div class="seg seg-sm">
        <button type="button" class="${routineMode === 'suggested' ? 'active' : ''}" data-action="set-routine-mode" data-mode="suggested">Sugerida</button>
        <button type="button" class="${routineMode === 'custom' ? 'active' : ''}" data-action="set-routine-mode" data-mode="custom">Mi rutina</button>
      </div>
      ${routineMode === 'suggested'
        ? `<div class="info-box" style="line-height:1.8">${buildSuggestedRoutine(freqKey)}</div>`
        : builder}
    </div>

    <details class="card details-card" style="margin-top:12px">
      <summary><span>${icon('info')} Reglas anti-sobreentrenamiento</span>${icon('chevron','chev')}</summary>
      <div class="details-body">
        <p><b>1.</b> Cada músculo tiene su rango óptimo de series semanales.</p>
        <p><b>2.</b> Glúteo, cuádriceps, pecho y espalda toleran más volumen.</p>
        <p><b>3.</b> Bíceps, tríceps, trapecio y antebrazo necesitan menos.</p>
        <p><b>4.</b> Máximo 10–11 series por músculo grande por sesión, 6–8 por pequeño.</p>
        <p><b>5.</b> Reps: fuerza 1–6 · hipertrofia 6–12 · resistencia 15–20+.</p>
        <p><b>6.</b> Dropsets: 1–2 por ejercicio, en la última serie.</p>
        <p><b>7.</b> Semana de descarga cada 5–6 semanas.</p>
      </div>
    </details>`;
}
function setRoutineMode(mode){
  state.profile.routineMode = mode;
  save();
  renderVolume();
}
async function addRoutineDay(){
  const name = await promptDialog({
    title:'Nuevo día de rutina',
    label:'Nombre del día',
    value:`Día ${(state.profile.customRoutine?.length || 0) + 1}`,
    placeholder:'Ej. Día 1 · Pecho y tríceps'
  });
  if(name === null) return;
  if(!Array.isArray(state.profile.customRoutine)) state.profile.customRoutine = [];
  state.profile.customRoutine.push({ name:name.trim() || `Día ${state.profile.customRoutine.length + 1}`, exercises:[] });
  save();
  renderVolume();
}
async function removeRoutineDay(index){
  const ok = await confirmDialog({ title:'Eliminar día', message:'Se eliminará este día completo de tu rutina.', confirmText:'Eliminar', danger:true });
  if(!ok) return;
  state.profile.customRoutine.splice(index, 1);
  save();
  renderVolume();
}
function addRoutineEx(index){
  const select = $(`#rExSel_${index}`);
  const sets = $(`#rExSets_${index}`);
  const reps = $(`#rExReps_${index}`);
  if(!select || !sets || !reps) return;
  const exName = select.value;
  const setsVal = sets.value.trim();
  const repsVal = reps.value.trim();
  if(!setsVal || !repsVal){ toast('Ingresa series y reps', 'error'); return; }
  if(!/^\d+$/.test(setsVal)){ toast('Las series deben ser un número', 'error'); return; }
  state.profile.customRoutine[index].exercises.push({ name:exName, sets:setsVal, reps:repsVal });
  save();
  renderVolume();
}
function removeRoutineEx(dayIndex, exIndex){
  state.profile.customRoutine[dayIndex].exercises.splice(exIndex, 1);
  save();
  renderVolume();
}

/* ============================================================
   REPORTES
   ============================================================ */
function renderReports(){
  if(currentRepMode === 'dia') renderReportsByDay();
  else renderReportsByWeek();
}
function renderReportsByDay(){
  const container = $('#reportesContent');
  if(!container) return;
  const dates = [...new Set(state.workouts.map(w=>w.date))].sort().reverse().slice(0, 14);
  if(!dates.length){
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${icon('calendar')}</div><h4>Aún no hay reportes</h4><p>Registra entrenamientos y comidas para ver el resumen diario.</p></div>`;
    return;
  }
  const goals = calcNutrition();
  container.innerHTML = dates.map(date=>{
    const dayWorkouts = state.workouts.filter(w=>w.date === date);
    const dayMeals = state.meals.filter(m=>m.date === date);
    const totalSets = dayWorkouts.reduce((s,w)=>s + w.sets.length, 0);
    const totalDrops = dayWorkouts.reduce((s,w)=>s + w.sets.filter(x=>x.isDrop).length, 0);
    const totalVol = dayWorkouts.reduce((s,w)=>s + w.sets.reduce((a,x)=>a + x.reps * x.weight, 0), 0);
    const groups = [...new Set(dayWorkouts.map(w=>w.bodyPart))];
    const consumed = dayMeals.reduce((a,m)=>({ prot:a.prot + (m.prot || 0), carb:a.carb + (m.carb || 0), fat:a.fat + (m.fat || 0) }), { prot:0, carb:0, fat:0 });
    const consumedCal = consumed.prot * 4 + consumed.carb * 4 + consumed.fat * 9;
    const adherence = goals ? clamp(consumedCal / goals.calories * 100, 0, 999) : 0;
    const badge = adherence >= 90 ? 'badge-green' : adherence >= 70 ? 'badge-yellow' : 'badge-red';
    const d = fromISO(date);
    return `<div class="card" style="margin-bottom:10px">
      <div class="card-head" style="margin-bottom:8px">
        <div><h3 style="font-size:14px">${fmtDateFull(date)} · ${DAY_SHORT[(d.getDay() + 6) % 7]}</h3><p class="muted small" style="margin-top:2px">${groups.map(esc).join(' · ') || 'Sin entrenamiento'}</p></div>
        <span class="badge ${badge}">${Math.round(adherence)}% meta</span>
      </div>
      <div class="stats-grid">
        ${statTile(totalSets, 'Series')}
        ${statTile(totalDrops, 'Dropsets', '', 'var(--orange)')}
        ${statTile(fmtInt(totalVol), 'Volumen', 'kg')}
        ${statTile(`${Math.round(consumed.prot)}`, 'Proteína', 'g', 'var(--green)')}
        ${statTile(fmtInt(consumedCal), 'Calorías', 'kcal')}
        ${statTile(dayMeals.length, 'Alimentos')}
      </div>
    </div>`;
  }).join('');
}
function renderReportsByWeek(){
  const container = $('#reportesContent');
  if(!container) return;
  const weeks = {};
  const ensure = key => {
    if(!weeks[key]){
      const start = fromISO(key);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      weeks[key] = { workouts:[], meals:[], end:toISODate(end) };
    }
    return weeks[key];
  };
  state.workouts.forEach(w=>ensure(getWeekKey(w.date)).workouts.push(w));
  state.meals.forEach(m=>ensure(getWeekKey(m.date)).meals.push(m));
  const keys = Object.keys(weeks).sort().reverse();
  if(!keys.length){
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${icon('chart')}</div><h4>Aún no hay datos semanales</h4><p>Cuando registres sesiones o comidas verás el resumen por semana.</p></div>`;
    return;
  }
  const goals = calcNutrition();
  container.innerHTML = keys.map(key=>{
    const wk = weeks[key];
    const totalSets = wk.workouts.reduce((s,w)=>s + w.sets.length, 0);
    const totalDrops = wk.workouts.reduce((s,w)=>s + w.sets.filter(x=>x.isDrop).length, 0);
    const totalVol = wk.workouts.reduce((s,w)=>s + w.sets.reduce((a,x)=>a + x.reps * x.weight, 0), 0);
    const uniqueDays = new Set(wk.workouts.map(w=>w.date)).size;
    const groups = {};
    wk.workouts.forEach(w=>{ groups[w.bodyPart] = (groups[w.bodyPart] || 0) + w.sets.length; });
    const mealDays = new Set(wk.meals.map(m=>m.date)).size || 1;
    const avgProt = wk.meals.reduce((s,m)=>s + (m.prot || 0), 0) / mealDays;
    const avgCal = wk.meals.reduce((s,m)=>s + (m.prot || 0) * 4 + (m.carb || 0) * 4 + (m.fat || 0) * 9, 0) / mealDays;
    const protAdh = goals ? clamp(avgProt / goals.protein * 100, 0, 999) : 0;
    return `<div class="card" style="margin-bottom:10px">
      <div class="card-head" style="margin-bottom:8px">
        <div><h3 style="font-size:14px">Semana del ${fmtDateFull(key)}</h3><p class="muted small" style="margin-top:2px">${uniqueDays} días entrenados · ${fmtDate(key)} – ${fmtDate(wk.end)}</p></div>
        <span class="badge ${protAdh >= 90 ? 'badge-green' : protAdh >= 70 ? 'badge-yellow' : 'badge-red'}">P: ${Math.round(protAdh)}%</span>
      </div>
      <div class="stats-grid">
        ${statTile(totalSets, 'Series')}
        ${statTile(totalDrops, 'Dropsets', '', 'var(--orange)')}
        ${statTile(fmtInt(totalVol), 'Volumen', 'kg')}
        ${statTile(Math.round(avgProt), 'Prot/día', 'g', 'var(--green)')}
        ${statTile(fmtInt(avgCal), 'Kcal/día')}
        ${statTile(uniqueDays, 'Días')}
      </div>
      ${Object.keys(groups).length ? `<p class="muted small" style="margin-top:10px">Reparto: ${Object.entries(groups).map(([g,s])=>`${esc(g)} ${s}`).join(' · ')}</p>` : ''}
    </div>`;
  }).join('');
}

/* ============================================================
   NUTRICIÓN
   ============================================================ */
function renderNutrition(){
  const p = state.profile;
  const fields = { nWeight:p.weight || '', nHeight:p.height || '', nAge:p.age || '' };
  Object.entries(fields).forEach(([id, value])=>{ const el = document.getElementById(id); if(el) el.value = value; });
  $('#nSex').value = p.sex || 'M';
  $('#nActivity').value = p.activity || '1.55';
  $('#nExp').value = p.experience || 'principiante';
  $('#nFreq').value = p.frequency || '4';
  updateNutritionBadge();
  renderGoalPicker();
  refreshNutrition();

  if(selectedFood && !findFood(selectedFood.n)){
    selectedFood = null;
  }
  if(selectedFood){
    $('#foodSearch').value = selectedFood.n;
    $('#foodSelected').style.display = 'flex';
    $('#foodSelected').innerHTML = foodSelectedHTML(selectedFood);
    updateFoodPreview();
  } else {
    renderFoodResults($('#foodSearch').value || '');
  }
}
function updateNutritionBadge(){
  const badge = $('#nutritionGoalBadge');
  if(!badge) return;
  const goal = GOALS[state.profile.goal] || GOALS.maintain;
  badge.textContent = goal.name;
}
function refreshNutrition(){
  renderBalance();
  renderWeeklyNutrition();
  renderObservations();
  renderGoals();
  renderMeals();
  renderSuggestions();
  renderSupplements();
  renderInfo();
  renderCustomFoods();
  updateNutritionBadge();
}
function renderGoalPicker(){
  const container = $('#goalPicker');
  if(!container) return;
  const icons = { maintain:'⚖️', recomp:'🔄', cut_lean:'🔻', cut_aggressive:'⚡', bulk_clean:'🌱', bulk_moderate:'📈', bulk_dirty:'🍔' };
  container.innerHTML = Object.entries(GOALS).map(([key, goal])=>`
    <button type="button" class="choice-card ${state.profile.goal === key ? 'selected' : ''}" data-action="select-goal" data-key="${key}">
      <span class="choice-icon">${icons[key] || '🎯'}</span>
      <span class="choice-copy">
        <strong>${goal.name}</strong>
        <span class="choice-desc">${goal.desc}</span>
        <span class="choice-meta">${goal.factor === 1 ? '= TDEE' : goal.factor < 1 ? `Déficit ${Math.round((1 - goal.factor) * 100)}%` : `Superávit ${Math.round((goal.factor - 1) * 100)}%`} · ${goal.protKg} g/kg</span>
      </span>
      <span class="choice-check">${icon('check')}</span>
    </button>`).join('');
}
function selectGoal(key){
  if(!GOALS[key]) return;
  state.profile.goal = key;
  save();
  renderGoalPicker();
  refreshNutrition();
  renderGreeting();
  renderHome();
  toast(`Objetivo: ${GOALS[key].name}`, 'info');
}
function saveProfile(){
  const weight = parseNum($('#nWeight').value);
  const height = parseNum($('#nHeight').value);
  const age = parseNum($('#nAge').value);
  if(!isNaN(weight) && (weight < 30 || weight > 250)){ toast('El peso debe estar entre 30 y 250 kg', 'error'); return; }
  if(!isNaN(height) && (height < 120 || height > 230)){ toast('La altura debe estar entre 120 y 230 cm', 'error'); return; }
  if(!isNaN(age) && (age < 14 || age > 99)){ toast('La edad debe estar entre 14 y 99 años', 'error'); return; }
  state.profile.weight = isNaN(weight) ? null : weight;
  state.profile.height = isNaN(height) ? null : height;
  state.profile.age = isNaN(age) ? null : age;
  state.profile.sex = $('#nSex').value;
  state.profile.activity = $('#nActivity').value;
  state.profile.experience = $('#nExp').value;
  state.profile.frequency = $('#nFreq').value;
  save();
  renderGreeting();
  refreshNutrition();
  renderHome();
  renderVolume();
  renderRegistrar();
  toast('Perfil guardado');
}
function macroRow(label, consumed, target, unit, cls){
  const pct = clamp(consumed / Math.max(1, target) * 100, 0, 100);
  return `<div class="macro-row">
    <div class="macro-top"><b>${label}</b><span><b>${Math.round(consumed)}</b> / ${Math.round(target)} ${unit}</span></div>
    <div class="macro-track"><div class="macro-fill ${cls}" style="width:${pct}%"></div></div>
  </div>`;
}
function renderBalance(){
  const container = $('#balanceContent');
  const pctBadge = $('#balancePct');
  if(!container) return;
  const goals = calcNutrition();
  if(!goals){
    if(pctBadge) pctBadge.textContent = 'Sin datos';
    container.innerHTML = `<div class="empty-state" style="padding:26px 12px"><div class="empty-icon">${icon('scale')}</div><h4>Completa tu perfil</h4><p>Necesitamos peso, altura y edad para calcular tus macros.</p></div>`;
    return;
  }
  const totals = getTodayTotals();
  const calPct = totals.cal / goals.calories * 100;
  const protPct = totals.prot / goals.protein * 100;
  const carbPct = totals.carb / goals.carbs * 100;
  const fatPct = totals.fat / goals.fat * 100;
  const score = clamp(calPct * .3 + protPct * .4 + carbPct * .15 + fatPct * .15, 0, 100);
  const variant = score >= 85 ? 'green' : score >= 65 ? 'orange' : 'red';
  const remaining = goals.calories - totals.cal;
  if(pctBadge) pctBadge.textContent = `${Math.round(score)}%`;
  container.innerHTML = `
    <div class="balance-top">
      <div class="ring-wrap" style="width:132px;height:132px">
        ${ringSVG(clamp(calPct, 0, 100), 132, variant, 9)}
        <div class="ring-center"><strong>${fmtInt(totals.cal)}</strong><span>de ${fmtInt(goals.calories)} kcal</span></div>
      </div>
      <div class="balance-copy">
        <div class="balance-score">${Math.round(score)}%<span>del día</span></div>
        <p>${remaining >= 0 ? `Te faltan ${fmtInt(remaining)} kcal` : `Exceso de ${fmtInt(Math.abs(remaining))} kcal`} · ${totals.meals.length} alimento${totals.meals.length === 1 ? '' : 's'}</p>
        <span class="badge ${remaining >= 0 ? 'badge-blue' : 'badge-orange'}" style="margin-top:8px">${remaining >= 0 ? 'Vas en déficit' : 'Meta superada'}</span>
      </div>
    </div>
    <div class="macro-list">
      ${macroRow('Proteína', totals.prot, goals.protein, 'g', 'prot')}
      ${macroRow('Carbohidratos', totals.carb, goals.carbs, 'g', 'carb')}
      ${macroRow('Grasas', totals.fat, goals.fat, 'g', 'fat')}
    </div>`;
}
function renderWeeklyNutrition(){
  const container = $('#weeklyNutritionContent');
  if(!container) return;
  const goals = calcNutrition();
  if(!goals){
    container.innerHTML = '<p class="small muted">Completa tu perfil para ver el cumplimiento semanal.</p>';
    return;
  }
  const today = todayISO();
  let okDays = 0;
  const cells = getWeekDays().map(d=>{
    const totals = consumedForDate(d.iso);
    let status = 'empty', glyph = '·';
    if(d.iso === today){
      if(!totals.meals.length){ status = 'partial'; glyph = icon('clock'); }
      else if(totals.cal >= goals.calories * .85 && totals.prot >= goals.protein * .9){ status = 'ok'; glyph = icon('check'); }
      else { status = 'partial'; glyph = icon('info'); }
    } else if(d.iso < today){
      if(!totals.meals.length){ status = 'fail'; glyph = icon('x'); }
      else if(totals.cal >= goals.calories * .85 && totals.cal <= goals.calories * 1.15 && totals.prot >= goals.protein * .9){ status = 'ok'; glyph = icon('check'); }
      else { status = 'partial'; glyph = icon('info'); }
    }
    if(status === 'ok') okDays++;
    return `<div class="week-cell ${status} ${d.iso === today ? 'today' : ''}" title="${fmtDateFull(d.iso)}${totals.meals.length ? ` · ${fmtInt(totals.cal)} kcal` : ''}">
      <span class="wd">${d.letter}</span>
      <span class="ws">${glyph}</span>
      <span class="wk">${totals.meals.length ? fmtInt(totals.cal) : '—'}</span>
    </div>`;
  }).join('');
  container.innerHTML = `<div class="week-grid">${cells}</div>
    <div class="week-legend">
      <span><i style="background:var(--green)"></i> Cumplido</span>
      <span><i style="background:var(--yellow)"></i> Parcial</span>
      <span><i style="background:var(--red)"></i> Sin registro</span>
    </div>
    <p class="small muted" style="margin-top:10px">${okDays} de 7 días cumplidos esta semana.</p>`;
}
function renderObservations(){
  const container = $('#obsContent');
  if(!container) return;
  const goals = calcNutrition();
  if(!goals){
    container.innerHTML = '<p class="small muted">Completa tu perfil para ver observaciones.</p>';
    return;
  }
  const totals = getTodayTotals();
  const obs = [];
  const calPct = totals.cal / goals.calories * 100;
  const protPct = totals.prot / goals.protein * 100;
  const carbPct = totals.carb / goals.carbs * 100;
  const fatPct = totals.fat / goals.fat * 100;
  if(protPct >= 95 && protPct <= 110) obs.push({ t:'positive', m:`¡Excelente! Cumpliste tu meta de proteína (${Math.round(totals.prot)} g de ${goals.protein} g).` });
  else if(protPct >= 80) obs.push({ t:'neutral', m:`Proteína casi al objetivo: ${Math.round(totals.prot)} g de ${goals.protein} g.` });
  else if(protPct > 0) obs.push({ t:'negative', m:`Proteína baja hoy: ${Math.round(totals.prot)} g de ${goals.protein} g.` });
  if(calPct >= 95 && calPct <= 105) obs.push({ t:'positive', m:`Calorías en rango ideal: ${fmtInt(totals.cal)} de ${fmtInt(goals.calories)} kcal.` });
  else if(calPct < 85 && totals.cal > 0) obs.push({ t:'negative', m:`Por debajo de calorías: ${fmtInt(totals.cal)} de ${fmtInt(goals.calories)} kcal.` });
  else if(calPct > 115) obs.push({ t:'negative', m:`Exceso de calorías: ${fmtInt(totals.cal)} de ${fmtInt(goals.calories)} kcal.` });
  if(carbPct >= 90) obs.push({ t:'positive', m:`Carbohidratos bien cubiertos (${Math.round(totals.carb)} g).` });
  else if(carbPct < 60 && carbPct > 0) obs.push({ t:'neutral', m:`Carbos bajos: ${Math.round(totals.carb)} g de ${goals.carbs} g.` });
  if(fatPct > 130) obs.push({ t:'negative', m:`Grasas altas: ${Math.round(totals.fat)} g de ${goals.fat} g.` });
  else if(fatPct < 50 && fatPct > 0) obs.push({ t:'neutral', m:`Grasas bajas: ${Math.round(totals.fat)} g de ${goals.fat} g.` });

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 6);
  const lastWeek = state.workouts.filter(w=>w.date >= toISODate(cutoff) && w.date <= todayISO());
  const trainedDays = new Set(lastWeek.map(w=>w.date)).size;
  const freq = FREQUENCIES[state.profile.frequency || '4'];
  if(trainedDays >= 5) obs.push({ t:'positive', m:`Entrenaste ${trainedDays} días en los últimos 7. Gran consistencia.` });
  else if(trainedDays >= 3) obs.push({ t:'neutral', m:`Entrenaste ${trainedDays} días. Tu objetivo es ${freq.name}.` });
  else if(trainedDays > 0) obs.push({ t:'negative', m:`Solo ${trainedDays} día(s) entrenados. Tu frecuencia objetivo es ${freq.name}.` });
  else obs.push({ t:'negative', m:'No has entrenado en los últimos 7 días.' });

  const taken = state.supplementLog[todayISO()] || [];
  const creatine = state.supplements.find(s=>s.name.toLowerCase().includes('creatina'));
  if(creatine) obs.push(taken.includes(creatine.id) ? { t:'positive', m:'Tomaste creatina hoy ✅' } : { t:'neutral', m:'Aún no marcas la creatina de hoy.' });

  container.innerHTML = obs.map(o=>`<div class="obs-item obs-${o.t}">${o.m}</div>`).join('');
}
function renderGoals(){
  const container = $('#goalsContent');
  if(!container) return;
  const goals = calcNutrition();
  if(!goals){
    container.innerHTML = '<p class="small muted">Completa tu perfil para calcular tus objetivos.</p>';
    return;
  }
  container.innerHTML = `
    <div class="info-box" style="margin-bottom:12px"><b>${goals.goalName}</b><br>${goals.goalDesc}</div>
    <div class="preview-grid">
      <div class="preview-cell"><b>${fmtInt(goals.calories)}</b><span>kcal</span></div>
      <div class="preview-cell"><b>${goals.protein}</b><span>proteína g</span></div>
      <div class="preview-cell"><b>${goals.carbs}</b><span>carbos g</span></div>
      <div class="preview-cell"><b>${goals.fat}</b><span>grasas g</span></div>
    </div>
    <p class="small muted" style="margin-top:12px">BMR ${goals.bmr} kcal · TDEE ${goals.tdee} kcal · Ajuste ×${goals.factor}<br>Proteína ${goals.protKg} g/kg · Grasas ${goals.fatKg} g/kg</p>`;
}

/* ---------- Alimentos ---------- */
function normalizeSearch(value){
  return String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}
function foodEmoji(cat){
  return { proteina:'🥩', carbo:'🍚', grasa:'🥑', verdura:'🥦' }[cat] || '✨';
}
function caloriesPer100(food){
  return Math.round((Number(food.p) || 0) * 4 + (Number(food.c) || 0) * 4 + (Number(food.f) || 0) * 9);
}
function renderFoodResults(query = ''){
  const box = $('#foodResults');
  if(!box) return;
  if(selectedFood){ box.innerHTML = ''; return; }
  const q = normalizeSearch(query);
  const popularNames = ['Pechuga de pollo cocida','Arroz blanco cocido','Huevo entero cocido','Avena en hojuelas cruda','Banano','Yogur griego natural','Aguacate','Whey protein (polvo)'];
  let foods;
  if(!q){
    foods = popularNames.map(findFood).filter(Boolean);
  } else {
    foods = allFoods().filter(f=>normalizeSearch(f.n).includes(q));
    foods.sort((a,b)=>{
      const an = normalizeSearch(a.n), bn = normalizeSearch(b.n);
      return (bn.startsWith(q) ? 1 : 0) - (an.startsWith(q) ? 1 : 0) || an.localeCompare(bn);
    });
    foods = foods.slice(0, 10);
  }
  if(!foods.length){
    box.innerHTML = `<div class="picker-empty">Sin resultados para “${esc(query)}”. Puedes crearlo desde “Desde etiqueta”.</div>`;
    return;
  }
  box.innerHTML = `<div class="picker-group-label" style="padding-top:2px">${q ? 'Resultados' : 'Más usados'}</div>` + foods.map(food=>`
    <button type="button" class="food-result" data-action="pick-food" data-food="${esc(food.n)}">
      <span class="food-result-icon">${foodEmoji(food.cat)}</span>
      <span class="food-result-copy">
        <strong>${esc(food.n)}</strong>
        <small>P ${food.p} · C ${food.c} · G ${food.f} / 100 g</small>
      </span>
      <span class="food-result-kcal">${caloriesPer100(food)} kcal</span>
    </button>`).join('');
}
function foodSelectedHTML(food){
  return `<span class="food-result-icon">${foodEmoji(food.cat)}</span>
    <span class="food-selected-info"><strong>${esc(food.n)}</strong><small>Por 100 g: P ${food.p} g · C ${food.c} g · G ${food.f} g${food.e ? ` · ${food.e}` : ''}</small></span>
    <button type="button" class="icon-action" data-action="clear-food" aria-label="Quitar selección">${icon('x')}</button>`;
}
function chooseFood(name){
  const food = findFood(name);
  if(!food) return;
  selectedFood = food;
  const search = $('#foodSearch');
  search.value = food.n;
  $('#foodSearchClear').hidden = false;
  $('#foodResults').innerHTML = '';
  const selected = $('#foodSelected');
  selected.style.display = 'flex';
  selected.innerHTML = foodSelectedHTML(food);
  updateFoodPreview();
  $('#foodGrams').focus();
}
function clearFoodSelection(){
  selectedFood = null;
  const search = $('#foodSearch');
  if(search) search.value = '';
  const selected = $('#foodSelected');
  if(selected) selected.style.display = 'none';
  const preview = $('#foodPreview');
  if(preview) preview.style.display = 'none';
  const clear = $('#foodSearchClear');
  if(clear) clear.hidden = true;
  renderFoodResults('');
}
function updateFoodPreview(){
  const preview = $('#foodPreview');
  if(!preview) return;
  if(!selectedFood){ preview.style.display = 'none'; return; }
  const grams = parseNum($('#foodGrams').value);
  if(!grams || grams <= 0){ preview.style.display = 'none'; return; }
  const p = round(selectedFood.p * grams / 100, 2);
  const c = round(selectedFood.c * grams / 100, 2);
  const f = round(selectedFood.f * grams / 100, 2);
  const cal = round(p * 4 + c * 4 + f * 9, 1);
  preview.style.display = 'block';
  preview.innerHTML = `<div class="preview-title">${esc(selectedFood.n)} · ${grams} g</div>
    <div class="preview-grid">
      <div class="preview-cell"><b>${p}</b><span>proteína</span></div>
      <div class="preview-cell"><b>${c}</b><span>carbos</span></div>
      <div class="preview-cell"><b>${f}</b><span>grasas</span></div>
      <div class="preview-cell"><b>${Math.round(cal)}</b><span>kcal</span></div>
    </div>`;
}
function resetFoodForm(){
  selectedFood = null;
  $('#foodSearch').value = '';
  $('#foodGrams').value = '';
  $('#foodSelected').style.display = 'none';
  $('#foodPreview').style.display = 'none';
  $('#foodSearchClear').hidden = true;
  renderFoodResults('');
}
function addFood(){
  const grams = parseNum($('#foodGrams').value);
  if(!selectedFood){ toast('Selecciona un alimento', 'error'); $('#foodSearch').focus(); return; }
  if(!grams || grams <= 0){ toast('Ingresa los gramos', 'error'); $('#foodGrams').focus(); return; }
  const prot = round(selectedFood.p * grams / 100, 2);
  const carb = round(selectedFood.c * grams / 100, 2);
  const fat = round(selectedFood.f * grams / 100, 2);
  state.meals.push({
    id:uid(), date:todayISO(), name:selectedFood.n, grams, prot, carb, fat,
    time:$('#mealTime').value, cat:selectedFood.cat, e:selectedFood.e
  });
  save();
  toast(`${grams} g de ${selectedFood.n} añadidos`);
  resetFoodForm();
  refreshNutrition();
}
function updateManualPreview(){
  const preview = $('#manualPreview');
  if(!preview) return;
  const base = $('#mBase').value;
  const protInput = parseNum($('#mProt').value) || 0;
  const carbInput = parseNum($('#mCarb').value) || 0;
  const fatInput = parseNum($('#mFat').value) || 0;
  const grams = parseNum($('#mGrams').value) || 0;
  let prot100, carb100, fat100;
  if(base === '100'){
    prot100 = protInput; carb100 = carbInput; fat100 = fatInput;
  } else {
    const portion = parseNum($('#mPortionSize').value) || 0;
    if(portion <= 0){ preview.style.display = 'none'; return; }
    prot100 = protInput * 100 / portion;
    carb100 = carbInput * 100 / portion;
    fat100 = fatInput * 100 / portion;
  }
  if(grams <= 0){ preview.style.display = 'none'; return; }
  const p = round(prot100 * grams / 100, 2);
  const c = round(carb100 * grams / 100, 2);
  const f = round(fat100 * grams / 100, 2);
  const cal = round(p * 4 + c * 4 + f * 9, 1);
  preview.style.display = 'block';
  preview.innerHTML = `<div class="preview-title">Tu porción de ${grams} g</div>
    <div class="preview-grid">
      <div class="preview-cell"><b>${p}</b><span>proteína</span></div>
      <div class="preview-cell"><b>${c}</b><span>carbos</span></div>
      <div class="preview-cell"><b>${f}</b><span>grasas</span></div>
      <div class="preview-cell"><b>${Math.round(cal)}</b><span>kcal</span></div>
    </div>`;
}
function addManualFood(){
  const name = $('#mName').value.trim();
  const base = $('#mBase').value;
  const protInput = parseNum($('#mProt').value) || 0;
  const carbInput = parseNum($('#mCarb').value) || 0;
  const fatInput = parseNum($('#mFat').value) || 0;
  const grams = parseNum($('#mGrams').value);
  if(!name){ toast('Ponle un nombre al alimento', 'error'); return; }
  if(protInput + carbInput + fatInput <= 0){ toast('Ingresa al menos un macro de la etiqueta', 'error'); return; }
  if(!grams || grams <= 0){ toast('Ingresa los gramos que vas a comer', 'error'); return; }
  let prot100, carb100, fat100;
  if(base === '100'){
    prot100 = protInput; carb100 = carbInput; fat100 = fatInput;
  } else {
    const portion = parseNum($('#mPortionSize').value) || 0;
    if(portion <= 0){ toast('Ingresa el tamaño de la porción', 'error'); return; }
    prot100 = protInput * 100 / portion;
    carb100 = carbInput * 100 / portion;
    fat100 = fatInput * 100 / portion;
  }
  const custom = { n:name, p:round(prot100, 2), c:round(carb100, 2), f:round(fat100, 2), cat:'personalizado', e:'listo' };
  const existing = state.customFoods.find(f=>normalizeSearch(f.n) === normalizeSearch(name));
  if(existing) Object.assign(existing, custom);
  else state.customFoods.push(custom);
  const p = round(prot100 * grams / 100, 2);
  const c = round(carb100 * grams / 100, 2);
  const f = round(fat100 * grams / 100, 2);
  state.meals.push({ id:uid(), date:todayISO(), name, grams, prot:p, carb:c, fat:f, time:$('#mealTimeManual').value, cat:'personalizado', e:'listo' });
  save();
  ['mName','mProt','mCarb','mFat','mPortionSize','mGrams'].forEach(id=>{ const el = document.getElementById(id); if(el) el.value = ''; });
  $('#manualPreview').style.display = 'none';
  toast('Alimento guardado y añadido');
  refreshNutrition();
}
function renderMeals(){
  const container = $('#mealsList');
  if(!container) return;
  const todayMeals = state.meals.filter(m=>m.date === todayISO()).sort((a,b)=>a.id - b.id);
  if(!todayMeals.length){
    container.innerHTML = `<div class="card"><div class="empty-state"><div class="empty-icon">${icon('apple')}</div><h4>Aún no registras alimentos hoy</h4><p>Usa la base de datos o crea un alimento desde su etiqueta.</p></div></div>`;
    return;
  }
  const totals = todayMeals.reduce((a,m)=>({ prot:a.prot + (m.prot || 0), carb:a.carb + (m.carb || 0), fat:a.fat + (m.fat || 0) }), { prot:0, carb:0, fat:0 });
  const totalCal = totals.prot * 4 + totals.carb * 4 + totals.fat * 9;
  const byTime = {};
  todayMeals.forEach(m=>{ (byTime[m.time] ||= []).push(m); });
  const times = [...MEAL_ORDER, ...Object.keys(byTime).filter(t=>!MEAL_ORDER.includes(t))];
  container.innerHTML = `<div class="card">
    <div class="card-head"><h3>Alimentos de hoy</h3><span class="badge badge-soft">${todayMeals.length}</span></div>
    ${times.filter(t=>byTime[t]?.length).map(time=>{
      const items = byTime[time];
      const mealCal = items.reduce((s,m)=>s + (m.prot || 0) * 4 + (m.carb || 0) * 4 + (m.fat || 0) * 9, 0);
      return `<div class="meal-group">
        <div class="meal-group-head"><span>${esc(time)}</span><span>${Math.round(mealCal)} kcal</span></div>
        ${items.map(m=>`<div class="food-item">
          <div class="food-item-info">
            <div class="food-name">${esc(m.name)} <span class="grams">${m.grams} g</span></div>
            <div class="food-macros">P <b>${fmtDec(m.prot, 1)}</b> · C <b>${fmtDec(m.carb, 1)}</b> · G <b>${fmtDec(m.fat, 1)}</b></div>
          </div>
          <div class="food-actions">
            <button type="button" class="icon-action" data-action="edit-meal" data-id="${m.id}" aria-label="Editar gramos">${icon('edit')}</button>
            <button type="button" class="icon-action" data-action="delete-meal" data-id="${m.id}" aria-label="Eliminar alimento">${icon('trash')}</button>
          </div>
        </div>`).join('')}
      </div>`;
    }).join('')}
    <div class="info-box" style="border-top:1px solid rgba(255,255,255,.06);padding-top:10px;margin-top:8px">
      <b>Total:</b> ${fmtInt(totalCal)} kcal · P <b>${fmtDec(totals.prot, 1)} g</b> · C <b>${fmtDec(totals.carb, 1)} g</b> · G <b>${fmtDec(totals.fat, 1)} g</b>
    </div>
  </div>`;
}
async function editMeal(id){
  const meal = state.meals.find(m=>m.id === id);
  if(!meal) return;
  const value = await promptDialog({
    title:'Editar gramos',
    label:`${meal.name} · actualmente ${meal.grams} g`,
    value:String(meal.grams),
    inputmode:'decimal',
    confirmText:'Actualizar'
  });
  if(value === null) return;
  const grams = parseNum(value);
  if(isNaN(grams) || grams <= 0){ toast('Gramos inválidos', 'error'); return; }
  const food = findFood(meal.name);
  if(food){
    meal.grams = grams;
    meal.prot = round(food.p * grams / 100, 2);
    meal.carb = round(food.c * grams / 100, 2);
    meal.fat = round(food.f * grams / 100, 2);
  } else {
    const ratio = grams / meal.grams;
    meal.prot = round(meal.prot * ratio, 2);
    meal.carb = round(meal.carb * ratio, 2);
    meal.fat = round(meal.fat * ratio, 2);
    meal.grams = grams;
  }
  save();
  refreshNutrition();
  toast('Cantidad actualizada');
}
async function deleteMeal(id){
  const ok = await confirmDialog({ title:'Eliminar alimento', message:'Se quitará este alimento del día de hoy.', confirmText:'Eliminar', danger:true });
  if(!ok) return;
  state.meals = state.meals.filter(m=>m.id !== id);
  save();
  refreshNutrition();
  toast('Alimento eliminado', 'info');
}
function renderSuggestions(){
  const container = $('#suggestionsContent');
  if(!container) return;
  const goals = calcNutrition();
  if(!goals){
    container.innerHTML = '<p class="small muted">Completa tu perfil para ver sugerencias.</p>';
    return;
  }
  const totals = getTodayTotals();
  const remainingProt = goals.protein - totals.prot;
  const remainingCarb = goals.carbs - totals.carb;
  const remainingFat = goals.fat - totals.fat;
  const deficits = [
    { macro:'proteina', remaining:remainingProt, target:goals.protein, label:'Proteína', unit:'g', icon:'🥩' },
    { macro:'carbo', remaining:remainingCarb, target:goals.carbs, label:'Carbohidratos', unit:'g', icon:'🍚' },
    { macro:'grasa', remaining:remainingFat, target:goals.fat, label:'Grasas', unit:'g', icon:'🥑' }
  ].filter(d=>d.remaining > 5);
  if(!deficits.length){
    container.innerHTML = `<div class="alert alert-green">✅ ¡Excelente! Ya alcanzaste tus metas de macros hoy.</div>`;
    return;
  }
  deficits.sort((a,b)=>(b.remaining / b.target) - (a.remaining / a.target));
  const eaten = new Set(totals.meals.map(m=>normalizeSearch(m.name)));
  let html = `<div class="alert alert-orange">📊 Te faltan <b>${Math.round(remainingProt)} g de proteína</b> · <b>${Math.round(remainingCarb)} g de carbos</b> · <b>${Math.round(remainingFat)} g de grasas</b>.</div>`;
  deficits.forEach(d=>{
    let candidates = allFoods().filter(f=>f.cat === d.macro && !eaten.has(normalizeSearch(f.n)));
    if(candidates.length < 3) candidates = allFoods().filter(f=>f.cat === d.macro);
    candidates.sort((a,b)=>{
      const density = f => (d.macro === 'proteina' ? f.p : d.macro === 'carbo' ? f.c : f.f) / (f.p + f.c + f.f + 1);
      return density(b) - density(a);
    });
    const top = candidates.slice(0, 3);
    html += `<div class="picker-group-label" style="padding-left:2px">${d.icon} Cubrir ${d.label.toLowerCase()} — faltan ${Math.round(d.remaining)} ${d.unit}</div>`;
    top.forEach(food=>{
      const nutrient = d.macro === 'proteina' ? food.p : d.macro === 'carbo' ? food.c : food.f;
      if(nutrient <= 0) return;
      const gramsNeeded = Math.round(d.remaining / nutrient * 100);
      const grams = Math.min(gramsNeeded, 400);
      const actual = round(nutrient * grams / 100, 1);
      const cal = Math.round(food.p * grams / 100 * 4 + food.c * grams / 100 * 4 + food.f * grams / 100 * 9);
      html += `<div class="suggestion-item">
        <div class="suggestion-info"><div class="suggestion-name">${esc(food.n)}</div><div class="suggestion-detail"><b>${grams} g</b> → <span>${actual} ${d.unit}</span> · ${cal} kcal</div></div>
        <button type="button" class="suggestion-add" data-action="quick-add-food" data-food="${esc(food.n)}" data-grams="${grams}" aria-label="Añadir ${esc(food.n)}">${icon('plus')}</button>
      </div>`;
    });
  });
  container.innerHTML = html;
}
function quickAddFood(name, grams){
  const food = findFood(name);
  if(!food || !grams) return;
  const prot = round(food.p * grams / 100, 2);
  const carb = round(food.c * grams / 100, 2);
  const fat = round(food.f * grams / 100, 2);
  state.meals.push({ id:uid(), date:todayISO(), name:food.n, grams, prot, carb, fat, time:'Snack', cat:food.cat, e:food.e });
  save();
  refreshNutrition();
  toast(`${grams} g de ${food.n} añadidos`);
}
async function removeCustomFood(index){
  const ok = await confirmDialog({ title:'Eliminar alimento', message:'Se eliminará de tus alimentos personalizados.', confirmText:'Eliminar', danger:true });
  if(!ok) return;
  state.customFoods.splice(index, 1);
  save();
  renderCustomFoods();
  if(!selectedFood || !findFood(selectedFood.n)) clearFoodSelection();
  toast('Alimento eliminado', 'info');
}
function renderCustomFoods(){
  const container = $('#customFoodsList');
  if(!container) return;
  if(!state.customFoods.length){
    container.innerHTML = '<p class="small muted">Aún no has guardado alimentos personalizados.</p>';
    return;
  }
  container.innerHTML = state.customFoods.map((f, index)=>`<div class="food-item">
    <div class="food-item-info">
      <div class="food-name">${esc(f.n)}</div>
      <div class="food-macros">Por 100 g: P <b>${f.p}</b> · C <b>${f.c}</b> · G <b>${f.f}</b></div>
    </div>
    <button type="button" class="icon-action" data-action="remove-custom-food" data-index="${index}" aria-label="Eliminar alimento">${icon('trash')}</button>
  </div>`).join('');
}
function renderSupplements(){
  const container = $('#supplementsContent');
  if(!container) return;
  const today = todayISO();
  const taken = state.supplementLog[today] || [];
  const count = $('#suppCount');
  if(count) count.textContent = `${taken.length}/${state.supplements.length}`;
  if(!state.supplements.length){
    container.innerHTML = '<p class="small muted">Añade suplementos abajo.</p>';
    return;
  }
  container.innerHTML = state.supplements.map(s=>{
    const isTaken = taken.includes(s.id);
    return `<div class="supplement-item ${isTaken ? 'taken' : ''}">
      <button type="button" class="supp-check" data-action="toggle-supp" data-id="${s.id}" aria-pressed="${isTaken}" aria-label="Marcar ${esc(s.name)}">${icon('check')}</button>
      <div class="supp-info"><strong>${esc(s.name)}</strong><small>${esc(s.dose || 'Sin dosis definida')}</small></div>
      <button type="button" class="icon-action" data-action="delete-supp" data-id="${s.id}" aria-label="Eliminar suplemento">${icon('trash')}</button>
    </div>`;
  }).join('');
}
function toggleSupplement(id){
  const today = todayISO();
  if(!state.supplementLog[today]) state.supplementLog[today] = [];
  const list = state.supplementLog[today];
  const idx = list.indexOf(id);
  if(idx >= 0) list.splice(idx, 1);
  else list.push(id);
  save();
  renderSupplements();
  renderObservations();
}
async function deleteSupplement(id){
  const ok = await confirmDialog({ title:'Eliminar suplemento', message:'Se eliminará de tu lista y de los registros diarios.', confirmText:'Eliminar', danger:true });
  if(!ok) return;
  state.supplements = state.supplements.filter(s=>s.id !== id);
  Object.keys(state.supplementLog).forEach(date=>{
    state.supplementLog[date] = state.supplementLog[date].filter(x=>x !== id);
  });
  save();
  renderSupplements();
  renderObservations();
  toast('Suplemento eliminado', 'info');
}
function renderInfo(){
  const box = $('#infoBox');
  if(!box) return;
  const goals = calcNutrition();
  if(!goals){ box.innerHTML = 'Completa tu perfil para ver recomendaciones.'; return; }
  const freq = FREQUENCIES[state.profile.frequency || '4'];
  const hasCreatine = state.supplements.some(s=>s.name.toLowerCase().includes('creatina'));
  const hasWhey = state.supplements.some(s=>s.name.toLowerCase().includes('whey') || s.name.toLowerCase().includes('proteína'));
  box.innerHTML = `<b>Objetivo:</b> ${goals.goalName}. ${goals.goalDesc}<br><br>
    <b>Proteína:</b> ${goals.protein} g/día (${goals.protKg} g/kg).<br>
    <b>Carbohidratos:</b> ${goals.carbs} g/día.<br>
    <b>Grasas:</b> ${goals.fat} g/día (${goals.fatKg} g/kg).<br><br>
    <b>Frecuencia:</b> ${freq.icon} ${freq.name} · ${freq.split}.<br><br>
    ${hasCreatine ? '✅ <b>Creatina:</b> 5 g diarios.' : '💡 <b>Creatina:</b> añádela (5 g/día).'}<br>
    ${hasWhey ? '✅ <b>Whey:</b> úsala para completar tu proteína.' : '💡 <b>Whey:</b> útil si te cuesta llegar a la proteína.'}<br><br>
    <b>Hidratación:</b> ~${(state.profile.weight * .035).toFixed(1)} L de agua al día.`;
}

/* ============================================================
   BIBLIOTECA Y RESPALDO
   ============================================================ */
function renderExerciseLibrary(){
  fillExercisePicker();
  const container = $('#exLibrary');
  if(!container) return;
  const query = normalizeSearch($('#exSearch')?.value || '');
  let total = 0;
  const sections = MUSCLE_ORDER.map(m=>{
    let list = state.exercises[m] || [];
    total += list.length;
    if(query) list = list.filter(ex=>normalizeSearch(ex).includes(query));
    if(!list.length) return '';
    return `<div class="ex-group"><h3>${m}</h3><div class="ex-list">
      ${list.map(ex=>`<span class="ex-chip">${esc(ex)}<button type="button" data-action="remove-exercise" data-muscle="${esc(m)}" data-exercise="${esc(ex)}" aria-label="Eliminar ${esc(ex)}">${icon('x')}</button></span>`).join('')}
    </div></div>`;
  }).join('');
  const count = $('#exCount');
  if(count) count.textContent = `${total} ejercicios`;
  container.innerHTML = sections || `<div class="empty-state"><div class="empty-icon">${icon('search')}</div><h4>Sin resultados</h4><p>No encontramos ejercicios para “${esc($('#exSearch')?.value || '')}”.</p></div>`;
}
function addExercise(){
  const muscle = $('#newExBody').value;
  const name = $('#newExName').value.trim();
  if(!name){ toast('Escribe el nombre del ejercicio', 'error'); return; }
  if((state.exercises[muscle] || []).some(ex=>normalizeSearch(ex) === normalizeSearch(name))){ toast('Ese ejercicio ya existe en el grupo', 'error'); return; }
  state.exercises[muscle].push(name);
  save();
  $('#newExName').value = '';
  renderExerciseLibrary();
  toast(`Ejercicio añadido a ${muscle}`);
}
async function removeExercise(muscle, exercise){
  const ok = await confirmDialog({ title:'Eliminar ejercicio', message:`Se quitará “${esc(exercise)}” de tu biblioteca. El historial anterior se conserva.`, confirmText:'Eliminar', danger:true });
  if(!ok) return;
  state.exercises[muscle] = (state.exercises[muscle] || []).filter(ex=>ex !== exercise);
  if(selectedExercise?.name === exercise){ selectedExercise = null; updateExerciseUI(); }
  save();
  renderExerciseLibrary();
  toast('Ejercicio eliminado', 'info');
}
function exportData(){
  const blob = new Blob([JSON.stringify(state, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `respaldo_entrenamiento_${todayISO()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
  toast('Respaldo descargado');
}
async function importData(event){
  const file = event.target.files?.[0];
  if(!file) return;
  try{
    const text = typeof file.text === 'function'
      ? await file.text()
      : await new Promise((resolve, reject)=>{
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsText(file);
        });
    const parsed = JSON.parse(text);
    if(!parsed || !parsed.exercises || !Array.isArray(parsed.workouts)) throw new Error('Formato inválido');
    const ok = await confirmDialog({
      title:'Restaurar respaldo',
      message:'Esto reemplazará todos los datos actuales de la app. ¿Quieres continuar?',
      confirmText:'Restaurar'
    });
    if(!ok) return;
    state = normalizeState(migrateExercises(parsed));
    selectedExercise = null;
    selectedFood = null;
    $('#setsContainer').innerHTML = '';
    save();
    renderAll();
    if(!state.onboarded || !state.profile.name) openWelcome(false);
    else switchTab('inicio');
    toast('Respaldo restaurado');
  }catch(err){
    console.warn(err);
    toast('El archivo no es un respaldo válido', 'error');
  }finally{
    event.target.value = '';
  }
}

/* ============================================================
   ACCIONES
   ============================================================ */
async function handleAction(action, el){
  switch(action){
    case 'repeat-last': repeatLastSession(); break;
    case 'delete-workout': await deleteWorkout(Number(el.dataset.id)); break;
    case 'select-goal': selectGoal(el.dataset.key); break;
    case 'edit-profile': closeSheet(); openWelcome(true); break;
    case 'export': closeSheet(); exportData(); break;
    case 'import': closeSheet(); $('#importFile').click(); break;
    case 'add-routine-day': await addRoutineDay(); break;
    case 'remove-routine-day': await removeRoutineDay(Number(el.dataset.index)); break;
    case 'add-routine-ex': addRoutineEx(Number(el.dataset.index)); break;
    case 'remove-routine-ex': removeRoutineEx(Number(el.dataset.index), Number(el.dataset.ex)); break;
    case 'set-routine-mode': setRoutineMode(el.dataset.mode); break;
    case 'pick-food': chooseFood(el.dataset.food); break;
    case 'clear-food': clearFoodSelection(); break;
    case 'delete-meal': await deleteMeal(Number(el.dataset.id)); break;
    case 'edit-meal': await editMeal(Number(el.dataset.id)); break;
    case 'quick-add-food': quickAddFood(el.dataset.food, Number(el.dataset.grams)); break;
    case 'toggle-supp': toggleSupplement(Number(el.dataset.id)); break;
    case 'delete-supp': await deleteSupplement(Number(el.dataset.id)); break;
    case 'remove-custom-food': await removeCustomFood(Number(el.dataset.index)); break;
    case 'remove-exercise': await removeExercise(el.dataset.muscle, el.dataset.exercise); break;
    default: break;
  }
}

/* ============================================================
   EVENTOS
   ============================================================ */
function bindEvents(){
  /* Navegación y acciones delegadas */
  document.addEventListener('click', e=>{
    const tabEl = e.target.closest('[data-tab]');
    if(tabEl){ e.preventDefault(); switchTab(tabEl.dataset.tab); return; }
    const goEl = e.target.closest('[data-go]');
    if(goEl){ e.preventDefault(); switchTab(goEl.dataset.go); return; }
    const actionEl = e.target.closest('[data-action]');
    if(actionEl){ e.preventDefault(); handleAction(actionEl.dataset.action, actionEl); }
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && activeSheet) closeSheet();
  });

  $('#profileBtn').addEventListener('click', ()=>openWelcome(true));
  $('#moreBtn').addEventListener('click', openMoreSheet);

  /* Bienvenida */
  $('#wcCloseBtn').addEventListener('click', ()=>{
    if(welcomeEditMode) closeWelcome();
  });
  $('#wcBackBtn').addEventListener('click', ()=>{
    if(welcomeStep > 1){ welcomeStep--; updateWcStep(); }
  });
  $('#wcNextBtn').addEventListener('click', ()=>{
    if(welcomeStep === 1){
      const name = $('#wcName').value.trim();
      if(!name){ setWcError(1, 'Escribe tu nombre para continuar'); return; }
      state.profile.name = name;
      save();
      setWcError(1, '');
      welcomeStep = 2;
      updateWcStep();
    } else if(welcomeStep === 2){
      const weight = parseNum($('#wcWeight').value);
      const height = parseNum($('#wcHeight').value);
      const age = parseNum($('#wcAge').value);
      setWcError(2, '');
      if(!weight || weight < 30 || weight > 250){ setWcError(2, 'El peso debe estar entre 30 y 250 kg'); return; }
      if(!height || height < 120 || height > 230){ setWcError(2, 'La altura debe estar entre 120 y 230 cm'); return; }
      if(!age || age < 14 || age > 99){ setWcError(2, 'La edad debe estar entre 14 y 99 años'); return; }
      state.profile.weight = weight;
      state.profile.height = height;
      state.profile.age = age;
      state.profile.sex = $('#wcSex').value;
      state.profile.activity = $('#wcActivity').value;
      save();
      welcomeStep = 3;
      updateWcStep();
    } else if(welcomeStep === 3){
      welcomeStep = 4;
      updateWcStep();
    } else if(welcomeStep === 4){
      welcomeStep = 5;
      updateWcStep();
    } else {
      finishWelcome();
    }
  });
  $$('.welcome-card input').forEach(input=>{
    input.addEventListener('keydown', e=>{
      if(e.key === 'Enter'){ e.preventDefault(); $('#wcNextBtn').click(); }
    });
  });

  /* Registrar */
  $('#exercisePickerBtn').addEventListener('click', openExercisePicker);
  $('#addSetBtn').addEventListener('click', ()=>{
    addSetRow();
    const rows = $$('#setsContainer .set-row');
    rows[rows.length - 1]?.querySelector('.set-reps')?.focus();
  });
  $('#saveBtn').addEventListener('click', saveWorkout);
  $('#setsContainer').addEventListener('input', renderSessionSummary);
  $('#setsContainer').addEventListener('keydown', e=>{
    if(e.key !== 'Enter' || !e.target.matches('input')) return;
    e.preventDefault();
    const rows = $$('#setsContainer .set-row');
    const row = e.target.closest('.set-row');
    const index = rows.indexOf(row);
    if(index === rows.length - 1){
      addSetRow();
      const fresh = $$('#setsContainer .set-row').pop();
      fresh?.querySelector('.set-reps')?.focus();
    } else {
      const next = rows[index + 1];
      const target = e.target.classList.contains('set-reps') ? next.querySelector('.set-weight') : next.querySelector('.set-reps');
      target?.focus();
    }
  });

  /* Filtros e historial */
  $('#filterYear').addEventListener('change', renderHistory);
  $('#filterMonth').addEventListener('change', renderHistory);
  $('#progressExercise').addEventListener('change', renderProgress);

  /* Reportes */
  $$('.seg button[data-rep]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $$('.seg button[data-rep]').forEach(b=>b.classList.toggle('active', b === btn));
      currentRepMode = btn.dataset.rep;
      renderReports();
    });
  });

  /* Nutrición */
  $('#saveProfileBtn').addEventListener('click', saveProfile);
  $('#foodModeTabs').addEventListener('click', e=>{
    const btn = e.target.closest('button[data-mode]');
    if(!btn) return;
    $$('#foodModeTabs button').forEach(b=>b.classList.toggle('active', b === btn));
    $('#modeDB').style.display = btn.dataset.mode === 'db' ? 'block' : 'none';
    $('#modeManual').style.display = btn.dataset.mode === 'manual' ? 'block' : 'none';
  });
  $('#mBase').addEventListener('change', e=>{
    $('#mPortionRow').style.display = e.target.value === 'porcion' ? 'block' : 'none';
    updateManualPreview();
  });
  ['mName','mProt','mCarb','mFat','mPortionSize','mGrams'].forEach(id=>{
    document.getElementById(id)?.addEventListener('input', updateManualPreview);
  });
  $('#addManualBtn').addEventListener('click', addManualFood);

  $('#foodSearch').addEventListener('input', e=>{
    const value = e.target.value;
    if(selectedFood && normalizeSearch(value) !== normalizeSearch(selectedFood.n)){
      selectedFood = null;
      $('#foodSelected').style.display = 'none';
      $('#foodPreview').style.display = 'none';
      updateFoodPreview();
    }
    $('#foodSearchClear').hidden = !value;
    renderFoodResults(value);
  });
  $('#foodSearchClear').addEventListener('click', clearFoodSelection);
  $('#foodSearch').addEventListener('keydown', e=>{
    if(e.key === 'Enter'){
      e.preventDefault();
      const first = $('#foodResults .food-result');
      if(first) first.click();
    }
  });
  $('#foodGrams').addEventListener('input', updateFoodPreview);
  $('#addFoodBtn').addEventListener('click', addFood);
  $('#foodGrams').addEventListener('keydown', e=>{ if(e.key === 'Enter'){ e.preventDefault(); addFood(); } });

  $('#addSuppBtn').addEventListener('click', ()=>{
    const name = $('#newSuppName').value.trim();
    const dose = $('#newSuppDose').value.trim();
    if(!name){ toast('Escribe el nombre del suplemento', 'error'); return; }
    state.supplements.push({ id:uid(), name, dose });
    save();
    $('#newSuppName').value = '';
    $('#newSuppDose').value = '';
    renderSupplements();
    renderObservations();
    toast('Suplemento añadido');
  });

  /* Biblioteca */
  $('#addExBtn').addEventListener('click', addExercise);
  $('#exSearch').addEventListener('input', renderExerciseLibrary);
  $('#exportBtn').addEventListener('click', exportData);
  $('#importBtn').addEventListener('click', ()=>$('#importFile').click());
  $('#importFile').addEventListener('change', importData);

  /* Saneamiento de campos numéricos */
  document.addEventListener('input', e=>{
    const input = e.target;
    if(!(input instanceof HTMLInputElement)) return;
    if(input.inputMode === 'decimal') input.value = input.value.replace(/[^0-9.,]/g, '');
    else if(input.inputMode === 'numeric') input.value = input.value.replace(/[^0-9]/g, '');
  });
}

/* ============================================================
   RENDER GLOBAL + ARRANQUE
   ============================================================ */
function renderAll(){
  renderGreeting();
  renderHome();
  renderRegistrar();
  renderHistory();
  renderProgress();
  renderVolume();
  renderReports();
  renderNutrition();
  renderExerciseLibrary();
}
function registerServiceWorker(){
  if(!('serviceWorker' in navigator)) return;
  if(new URLSearchParams(window.location.search).get('nosw') === '1') return;
  const boot = ()=>{
    navigator.serviceWorker.register('sw.js', { updateViaCache:'none' })
      .then(reg=>{
        reg.update().catch(()=>{});
        setInterval(()=>reg.update().catch(()=>{}), 60 * 60 * 1000);
      })
      .catch(()=>{});
    let refreshing = false;
    let hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', ()=>{
      if(!hadController){ hadController = true; return; }
      if(refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  };
  if(document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
}
function init(){
  load();
  bindEvents();
  $('#wDate').value = todayISO();
  renderAll();
  if(!state.onboarded || !state.profile.name){
    openWelcome(false);
  } else {
    const allowedTabs = ['inicio','registrar','historial','progreso','nutricion','volumen','reportes','ejercicios'];
    const requested = new URLSearchParams(window.location.search).get('tab');
    switchTab(allowedTabs.includes(requested) ? requested : 'inicio');
  }
  registerServiceWorker();
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
