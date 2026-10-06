"""Bug Hunt challenges per frontend framework (classic bugs)."""

from __future__ import annotations

from typing import Any

# Each challenge: lines are 1-based; bug_line is the buggy line number.
# fixes: one with correct=True.

CHALLENGES: dict[str, list[dict[str, Any]]] = {
    "vanilla": [
        {
            "id": "v01",
            "file": "sum.js",
            "title": "Off-by-one → NaN",
            "lines": [
                "function sum(arr) {",
                "  let total = 0;",
                "  for (let i = 0; i <= arr.length; i++) {",
                "    total += arr[i];",
                "  }",
                "  return total;",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {"id": "a", "code": "  for (let i = 0; i < arr.length; i++) {", "correct": True},
                {"id": "b", "code": "  for (let i = 1; i <= arr.length; i++) {", "correct": False},
                {"id": "c", "code": "  for (let i = 0; i <= arr.length - 2; i++) {", "correct": False},
            ],
        },
        {
            "id": "v02",
            "file": "auth.js",
            "title": "== vs ===",
            "lines": [
                "function isAdmin(user) {",
                "  if (user.role == true) {",
                '    return "welcome";',
                "  }",
                '  return "denied";',
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": '  if (user.role === "admin") {', "correct": True},
                {"id": "b", "code": "  if (user.role === true) {", "correct": False},
                {"id": "c", "code": "  if (user.role == 1) {", "correct": False},
            ],
        },
        {
            "id": "v03",
            "file": "buttons.js",
            "title": "var + closure в цикле",
            "lines": [
                "const buttons = document.querySelectorAll(\"button\");",
                "for (var i = 0; i < buttons.length; i++) {",
                "  buttons[i].onclick = function () {",
                "    console.log(\"clicked\", i);",
                "  };",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "for (let i = 0; i < buttons.length; i++) {", "correct": True},
                {"id": "b", "code": "for (const i = 0; i < buttons.length; i++) {", "correct": False},
                {"id": "c", "code": "for (var i = 1; i < buttons.length; i++) {", "correct": False},
            ],
        },
        {
            "id": "v04",
            "file": "api.js",
            "title": "забыли await",
            "lines": [
                "async function loadUser(id) {",
                "  const res = fetch(\"/api/users/\" + id);",
                "  const data = await res.json();",
                "  return data;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": '  const res = await fetch("/api/users/" + id);', "correct": True},
                {"id": "b", "code": '  const res = fetch("/api/users/" + id).json();', "correct": False},
                {"id": "c", "code": "  const res = Promise.resolve(id);", "correct": False},
            ],
        },
        {
            "id": "v05",
            "file": "parse.js",
            "title": "JSON.parse без try",
            "lines": [
                "function readConfig(raw) {",
                "  const config = JSON.parse(raw);",
                "  return config.theme;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  try { return JSON.parse(raw).theme; } catch { return \"dark\"; }",
                    "correct": True,
                },
                {"id": "b", "code": "  const config = JSON.parse(raw || {});", "correct": False},
                {"id": "c", "code": "  const config = eval(raw);", "correct": False},
            ],
        },
        {
            "id": "v06",
            "file": "sort.js",
            "title": "Array.sort без компаратора",
            "lines": [
                "const nums = [10, 2, 1, 20];",
                "nums.sort();",
                "console.log(nums);",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "nums.sort((a, b) => a - b);", "correct": True},
                {"id": "b", "code": "nums.sort((a, b) => a > b);", "correct": False},
                {"id": "c", "code": "nums.sort(true);", "correct": False},
            ],
        },
        {
            "id": "v07",
            "file": "dom.js",
            "title": "XSS через innerHTML",
            "lines": [
                "function showName(name) {",
                "  const el = document.getElementById(\"out\");",
                "  el.innerHTML = \"Hello, \" + name;",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {"id": "a", "code": '  el.textContent = "Hello, " + name;', "correct": True},
                {"id": "b", "code": '  el.innerHTML = `<b>${name}</b>`;', "correct": False},
                {"id": "c", "code": "  el.innerHTML = name.trim();", "correct": False},
            ],
        },
        {
            "id": "v08",
            "file": "form.js",
            "title": "нет preventDefault",
            "lines": [
                "form.addEventListener(\"submit\", (e) => {",
                "  const data = new FormData(form);",
                "  send(data);",
                "});",
            ],
            "bug_line": 1,
            "fixes": [
                {
                    "id": "a",
                    "code": 'form.addEventListener("submit", (e) => {\n  e.preventDefault();',
                    "correct": True,
                },
                {"id": "b", "code": 'form.addEventListener("click", (e) => {', "correct": False},
                {"id": "c", "code": 'form.onsubmit = null;', "correct": False},
            ],
        },
        {
            "id": "v09",
            "file": "float.js",
            "title": "сравнение float",
            "lines": [
                "function almostOne(x) {",
                "  return x === 0.1 + 0.2;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "  return Math.abs(x - 0.3) < 1e-10;", "correct": True},
                {"id": "b", "code": "  return x == 0.3;", "correct": False},
                {"id": "c", "code": "  return Number(x) === 0.3;", "correct": False},
            ],
        },
        {
            "id": "v10",
            "file": "this.js",
            "title": "потеря this",
            "lines": [
                "const timer = {",
                "  sec: 0,",
                "  start() {",
                "    setInterval(function () {",
                "      this.sec += 1;",
                "    }, 1000);",
                "  },",
                "};",
            ],
            "bug_line": 4,
            "fixes": [
                {"id": "a", "code": "    setInterval(() => {", "correct": True},
                {"id": "b", "code": "    setTimeout(function () {", "correct": False},
                {"id": "c", "code": "    setInterval(function () { this.sec = 0;", "correct": False},
            ],
        },
        {
            "id": "v11",
            "file": "fetch.js",
            "title": "не проверили res.ok",
            "lines": [
                "async function getItem(id) {",
                "  const res = await fetch(\"/api/items/\" + id);",
                "  return res.json();",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": "  if (!res.ok) throw new Error(res.statusText);\n  return res.json();",
                    "correct": True,
                },
                {"id": "b", "code": "  return res.text();", "correct": False},
                {"id": "c", "code": "  return await res;", "correct": False},
            ],
        },
        {
            "id": "v12",
            "file": "mutate.js",
            "title": "мутация аргумента",
            "lines": [
                "function addTag(user, tag) {",
                "  user.tags.push(tag);",
                "  return user;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  return { ...user, tags: [...user.tags, tag] };",
                    "correct": True,
                },
                {"id": "b", "code": "  user.tags = tag;", "correct": False},
                {"id": "c", "code": "  delete user.tags;", "correct": False},
            ],
        },
        {
            "id": "v13",
            "file": "optional.js",
            "title": "нет optional chaining",
            "lines": [
                "function cityOf(user) {",
                "  return user.profile.address.city;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "  return user?.profile?.address?.city;", "correct": True},
                {"id": "b", "code": "  return user.profile.address.city || \"\";", "correct": False},
                {"id": "c", "code": "  return String(user.profile.address.city);", "correct": False},
            ],
        },
        {
            "id": "v14",
            "file": "debounce.js",
            "title": "setTimeout без clear",
            "lines": [
                "function onType(fn) {",
                "  input.addEventListener(\"input\", () => {",
                "    setTimeout(fn, 300);",
                "  });",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": "    clearTimeout(t);\n    t = setTimeout(fn, 300);",
                    "correct": True,
                },
                {"id": "b", "code": "    setInterval(fn, 300);", "correct": False},
                {"id": "c", "code": "    fn();", "correct": False},
            ],
        },
        {
            "id": "v15",
            "file": "NaN.js",
            "title": "проверка NaN",
            "lines": [
                "function isBroken(n) {",
                "  return n === NaN;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "  return Number.isNaN(n);", "correct": True},
                {"id": "b", "code": "  return n == NaN;", "correct": False},
                {"id": "c", "code": "  return typeof n === \"NaN\";", "correct": False},
            ],
        },
    ],
    "react": [
        {
            "id": "r01",
            "file": "List.tsx",
            "title": "нет key",
            "lines": [
                "export function List({ items }: { items: string[] }) {",
                "  return (",
                "    <ul>",
                "      {items.map((item) => (",
                "        <li>{item}</li>",
                "      ))}",
                "    </ul>",
                "  );",
                "}",
            ],
            "bug_line": 5,
            "fixes": [
                {"id": "a", "code": "        <li key={item}>{item}</li>", "correct": True},
                {"id": "b", "code": "        <li key={Math.random()}>{item}</li>", "correct": False},
                {"id": "c", "code": "        <li id={item}>{item}</li>", "correct": False},
            ],
        },
        {
            "id": "r02",
            "file": "Counter.tsx",
            "title": "мутация state",
            "lines": [
                "function addItem(item: string) {",
                "  items.push(item);",
                "  setItems(items);",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "  setItems([...items, item]);", "correct": True},
                {"id": "b", "code": "  items.push(item); setItems([...items]);", "correct": False},
                {"id": "c", "code": "  setItems(items.push(item));", "correct": False},
            ],
        },
        {
            "id": "r03",
            "file": "Search.tsx",
            "title": "useEffect без deps",
            "lines": [
                "useEffect(() => {",
                "  fetch(\"/api?q=\" + query).then(r => r.json()).then(setData);",
                "});",
            ],
            "bug_line": 3,
            "fixes": [
                {"id": "a", "code": "}, [query]);", "correct": True},
                {"id": "b", "code": "}, []);", "correct": False},
                {"id": "c", "code": "}, [setData]);", "correct": False},
            ],
        },
        {
            "id": "r04",
            "file": "Ticker.tsx",
            "title": "нет cleanup interval",
            "lines": [
                "useEffect(() => {",
                "  setInterval(() => setN(n => n + 1), 1000);",
                "}, []);",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  const id = setInterval(() => setN(n => n + 1), 1000);\n  return () => clearInterval(id);",
                    "correct": True,
                },
                {"id": "b", "code": "  setTimeout(() => setN(n => n + 1), 1000);", "correct": False},
                {"id": "c", "code": "  setInterval(() => setN(n + 1), 1000);", "correct": False},
            ],
        },
        {
            "id": "r05",
            "file": "Hooks.tsx",
            "title": "условный hook",
            "lines": [
                "function Box({ enabled }: { enabled: boolean }) {",
                "  if (!enabled) return null;",
                "  const [value, setValue] = useState(0);",
                "  return <button onClick={() => setValue(value + 1)}>{value}</button>;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  const [value, setValue] = useState(0);\n  if (!enabled) return null;",
                    "correct": True,
                },
                {"id": "b", "code": "  if (!enabled) useState(0);", "correct": False},
                {"id": "c", "code": "  var [value, setValue] = enabled && useState(0);", "correct": False},
            ],
        },
        {
            "id": "r06",
            "file": "Input.tsx",
            "title": "controlled без onChange",
            "lines": [
                "export function NameField() {",
                "  const [name, setName] = useState(\"\");",
                "  return <input value={name} />;",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": '  return <input value={name} onChange={(e) => setName(e.target.value)} />;',
                    "correct": True,
                },
                {"id": "b", "code": "  return <input defaultValue={name} value={name} />;", "correct": False},
                {"id": "c", "code": "  return <input value={name} readOnly={false} />;", "correct": False},
            ],
        },
        {
            "id": "r07",
            "file": "Stale.tsx",
            "title": "stale closure",
            "lines": [
                "function onClick() {",
                "  setTimeout(() => {",
                "    setCount(count + 1);",
                "  }, 1000);",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {"id": "a", "code": "    setCount((c) => c + 1);", "correct": True},
                {"id": "b", "code": "    setCount(count++);", "correct": False},
                {"id": "c", "code": "    setCount(1);", "correct": False},
            ],
        },
        {
            "id": "r08",
            "file": "Keys.tsx",
            "title": "key={index} при фильтрации",
            "lines": [
                "todos.filter(t => !t.done).map((t, index) => (",
                "  <Todo key={index} todo={t} />",
                "))",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "  <Todo key={t.id} todo={t} />", "correct": True},
                {"id": "b", "code": "  <Todo key={String(index)} todo={t} />", "correct": False},
                {"id": "c", "code": "  <Todo key={index + t.title} todo={t} />", "correct": False},
            ],
        },
        {
            "id": "r09",
            "file": "Effect.tsx",
            "title": "бесконечный useEffect",
            "lines": [
                "useEffect(() => {",
                "  setFilters({ ...filters, page: 1 });",
                "}, [filters]);",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  setFilters((f) => ({ ...f, page: 1 }));\n}, []);",
                    "correct": True,
                },
                {"id": "b", "code": "  setFilters({ ...filters, page: 1 });\n}, [filters, page]);", "correct": False},
                {"id": "c", "code": "  filters.page = 1;", "correct": False},
            ],
        },
        {
            "id": "r10",
            "file": "Child.tsx",
            "title": "рендер объекта",
            "lines": [
                "export function Child({ user }: { user: { name: string } }) {",
                "  return <div>{user}</div>;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "  return <div>{user.name}</div>;", "correct": True},
                {"id": "b", "code": "  return <div>{JSON.stringify}</div>;", "correct": False},
                {"id": "c", "code": "  return <div>{user.toString()}</div>;", "correct": False},
            ],
        },
        {
            "id": "r11",
            "file": "Derived.tsx",
            "title": "derived state лишний",
            "lines": [
                "const [items, setItems] = useState<Item[]>([]);",
                "const [count, setCount] = useState(0);",
                "useEffect(() => setCount(items.length), [items]);",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "const count = items.length; // без отдельного state",
                    "correct": True,
                },
                {"id": "b", "code": "const [count, setCount] = useState(items.length);", "correct": False},
                {"id": "c", "code": "useMemo(() => setCount(items.length), [items]);", "correct": False},
            ],
        },
        {
            "id": "r12",
            "file": "Fetch.tsx",
            "title": "setState после unmount",
            "lines": [
                "useEffect(() => {",
                "  fetch(\"/api\").then(r => r.json()).then(setData);",
                "}, []);",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  let alive = true;\n  fetch(\"/api\").then(r => r.json()).then(d => { if (alive) setData(d); });\n  return () => { alive = false; };",
                    "correct": True,
                },
                {"id": "b", "code": "  fetch(\"/api\").then(r => r.json()).then(setData).catch(setData);", "correct": False},
                {"id": "c", "code": "  setData(fetch(\"/api\"));", "correct": False},
            ],
        },
        {
            "id": "r13",
            "file": "Props.tsx",
            "title": "неверный prop",
            "lines": [
                "type Props = { title: string };",
                "export function Card({ name }: Props) {",
                "  return <h2>{name}</h2>;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "export function Card({ title }: Props) {", "correct": True},
                {"id": "b", "code": "export function Card({ name }: { name: string }) {", "correct": False},
                {"id": "c", "code": "export function Card(props: Props) { return <h2>{props.name}</h2>;", "correct": False},
            ],
        },
        {
            "id": "r14",
            "file": "Memo.tsx",
            "title": "новый объект каждый рендер",
            "lines": [
                "function Screen() {",
                "  return <Chart style={{ color: \"red\" }} />;",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  const style = useMemo(() => ({ color: \"red\" }), []);\n  return <Chart style={style} />;",
                    "correct": True,
                },
                {"id": "b", "code": "  return <Chart style={new Object({ color: \"red\" })} />;", "correct": False},
                {"id": "c", "code": "  return <Chart style=\"color:red\" />;", "correct": False},
            ],
        },
        {
            "id": "r15",
            "file": "Event.tsx",
            "title": "событие на неправильном элементе",
            "lines": [
                "return (",
                "  <div onClick={() => navigate(\"/x\")}>",
                "    <button>Open</button>",
                "  </div>",
                ");",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  <div>\n    <button onClick={() => navigate(\"/x\")}>Open</button>",
                    "correct": True,
                },
                {"id": "b", "code": "  <div onClickCapture={() => navigate(\"/x\")}>", "correct": False},
                {"id": "c", "code": "  <div onclick={() => navigate(\"/x\")}>", "correct": False},
            ],
        },
    ],
    "vue": [
        {
            "id": "q01",
            "file": "List.vue",
            "title": "v-for без :key",
            "lines": [
                "<template>",
                "  <li v-for=\"item in items\">{{ item }}</li>",
                "</template>",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": '  <li v-for="item in items" :key="item">{{ item }}</li>', "correct": True},
                {"id": "b", "code": '  <li v-for="item in items" :id="item">{{ item }}</li>', "correct": False},
                # Без двоеточия key — обычный HTML-атрибут со строкой "i", не vnode key
                {"id": "c", "code": '  <li v-for="(item, i) in items" key="i">{{ item }}</li>', "correct": False},
            ],
        },
        {
            "id": "q02",
            "file": "UserCard.vue",
            "title": "мутация prop",
            "lines": [
                "const props = defineProps<{ tags: string[] }>();",
                "function add(tag: string) {",
                "  props.tags.push(tag);",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": "  emit(\"update:tags\", [...props.tags, tag]);",
                    "correct": True,
                },
                {"id": "b", "code": "  props.tags = [...props.tags, tag];", "correct": False},
                {"id": "c", "code": "  tags.push(tag);", "correct": False},
            ],
        },
        {
            "id": "q03",
            "file": "Profile.vue",
            "title": "потеря реактивности",
            "lines": [
                "const { name, age } = user;",
                "name.value = \"Ann\";",
            ],
            "bug_line": 1,
            "fixes": [
                {"id": "a", "code": "const name = toRef(user, \"name\");", "correct": True},
                {"id": "b", "code": "const { name, age } = reactive(user);", "correct": False},
                {"id": "c", "code": "let { name, age } = user;", "correct": False},
            ],
        },
        {
            "id": "q04",
            "file": "Item.vue",
            "title": "v-if + v-for на одном узле",
            "lines": [
                "<li",
                "  v-for=\"item in items\"",
                "  v-if=\"item.visible\"",
                ">",
                "  {{ item.name }}",
                "</li>",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": '<template v-for="item in items" :key="item.id">\n  <li v-if="item.visible">',
                    "correct": True,
                },
                {"id": "b", "code": '  v-if="item.visible" v-for="item in items"', "correct": False},
                {"id": "c", "code": '  v-show="item.visible" v-for="item in items"', "correct": False},
            ],
        },
        {
            "id": "q05",
            "file": "Watch.vue",
            "title": "watch без deep",
            "lines": [
                "watch(filters, () => {",
                "  load(filters);",
                "});",
            ],
            "bug_line": 1,
            "fixes": [
                {"id": "a", "code": "watch(filters, () => {\n  load(filters);\n}, { deep: true });", "correct": True},
                {"id": "b", "code": "watchEffect(filters, () => load(filters));", "correct": False},
                {"id": "c", "code": "watch(filters.value, () => load(filters));", "correct": False},
            ],
        },
        {
            "id": "q06",
            "file": "Computed.vue",
            "title": "side effect в computed",
            "lines": [
                "const label = computed(() => {",
                "  analytics.track(props.id);",
                "  return props.id.toUpperCase();",
                "});",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "watch(() => props.id, (id) => analytics.track(id));\nconst label = computed(() => props.id.toUpperCase());",
                    "correct": True,
                },
                {"id": "b", "code": "const label = computed(() => analytics.track(props.id));", "correct": False},
                {"id": "c", "code": "const label = props.id.toUpperCase();", "correct": False},
            ],
        },
        {
            "id": "q07",
            "file": "Emit.vue",
            "title": "неверное имя emit",
            "lines": [
                "const emit = defineEmits<{ change: [value: string] }>();",
                "function onInput(v: string) {",
                "  emit(\"changed\", v);",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {"id": "a", "code": '  emit("change", v);', "correct": True},
                {"id": "b", "code": '  emit("update:change", v);', "correct": False},
                {"id": "c", "code": "  emit(change, v);", "correct": False},
            ],
        },
        {
            "id": "q08",
            "file": "Ref.vue",
            "title": "template ref на mount",
            "lines": [
                "const el = ref<HTMLElement | null>(null);",
                "console.log(el.value.offsetWidth);",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "onMounted(() => console.log(el.value?.offsetWidth));",
                    "correct": True,
                },
                {"id": "b", "code": "console.log(el.offsetWidth);", "correct": False},
                {"id": "c", "code": "nextTick; console.log(el.value.offsetWidth);", "correct": False},
            ],
        },
        {
            "id": "q09",
            "file": "Store.ts",
            "title": "мутация store снаружи",
            "lines": [
                "const store = useCartStore();",
                "store.items.push(product);",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": "store.add(product);", "correct": True},
                {"id": "b", "code": "store.items = [...store.items, product];", "correct": False},
                {"id": "c", "code": "store.$patch; store.items.push(product);", "correct": False},
            ],
        },
        {
            "id": "q10",
            "file": "Shallow.vue",
            "title": "shallowRef и вложенность",
            "lines": [
                "const state = shallowRef({ count: 0 });",
                "function inc() {",
                "  state.value.count++;",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": "  state.value = { count: state.value.count + 1 };",
                    "correct": True,
                },
                {"id": "b", "code": "  state.count++;", "correct": False},
                {"id": "c", "code": "  triggerRef; state.value.count++;", "correct": False},
            ],
        },
        {
            "id": "q11",
            "file": "WatchEffect.vue",
            "title": "бесконечный watchEffect",
            "lines": [
                "const n = ref(0);",
                "watchEffect(() => {",
                "  n.value++;",
                "});",
            ],
            "bug_line": 3,
            "fixes": [
                {
                    "id": "a",
                    "code": "watchEffect(() => {\n  console.log(n.value);\n});",
                    "correct": True,
                },
                {"id": "b", "code": "watchEffect(() => { n.value = n.value++; });", "correct": False},
                {"id": "c", "code": "watchEffect(n, () => n.value++);", "correct": False},
            ],
        },
        {
            "id": "q12",
            "file": "Router.vue",
            "title": "навигация без await",
            "lines": [
                "async function go() {",
                "  router.push(\"/dashboard\");",
                "  loadDashboard();",
                "}",
            ],
            "bug_line": 2,
            "fixes": [
                {"id": "a", "code": '  await router.push("/dashboard");', "correct": True},
                {"id": "b", "code": '  router.replace; loadDashboard();', "correct": False},
                {"id": "c", "code": '  location.href = "/dashboard"; loadDashboard();', "correct": False},
            ],
        },
        {
            "id": "q13",
            "file": "Script.vue",
            "title": "ref в script без .value",
            "lines": [
                "const open = ref(false);",
                "function toggle() {",
                "  open = !open;",
                "}",
            ],
            "bug_line": 3,
            "fixes": [
                {"id": "a", "code": "  open.value = !open.value;", "correct": True},
                {"id": "b", "code": "  open = !open.value;", "correct": False},
                {"id": "c", "code": "  toggle(open);", "correct": False},
            ],
        },
        {
            "id": "q14",
            "file": "NextTick.vue",
            "title": "DOM до обновления",
            "lines": [
                "visible.value = true;",
                "const h = panel.value.offsetHeight;",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "visible.value = true;\nawait nextTick();\nconst h = panel.value?.offsetHeight;",
                    "correct": True,
                },
                {"id": "b", "code": "const h = panel.value.offsetHeight;\nvisible.value = true;", "correct": False},
                {"id": "c", "code": "visible.value = true;\nconst h = panel.offsetHeight;", "correct": False},
            ],
        },
        {
            "id": "q15",
            "file": "PropsDefault.vue",
            "title": "mutable default prop",
            "lines": [
                "defineProps({",
                "  items: { type: Array, default: [] },",
                "});",
            ],
            "bug_line": 2,
            "fixes": [
                {
                    "id": "a",
                    "code": "  items: { type: Array, default: () => [] },",
                    "correct": True,
                },
                {"id": "b", "code": "  items: { type: Array, default: null },", "correct": False},
                {"id": "c", "code": "  items: { type: Array, default: new Array() },", "correct": False},
            ],
        },
    ],
}

HINTS: dict[str, dict[str, str]] = {
    "v01": {
        "ru": "На некоторых массивах сумма получается странной.",
        "en": "On some arrays the sum comes out weird.",
    },
    "v02": {
        "ru": "В админку иногда попадают лишние пользователи.",
        "en": "Extra users sometimes get into admin.",
    },
    "v03": {
        "ru": "Клики по разным кнопкам ведут себя одинаково.",
        "en": "Clicks on different buttons behave the same.",
    },
    "v04": {
        "ru": "Функция падает при разборе ответа сервера.",
        "en": "The function crashes while parsing the server response.",
    },
    "v05": {
        "ru": "На части входных строк приложение падает.",
        "en": "The app crashes on some input strings.",
    },
    "v06": {
        "ru": "Числа после сортировки идут не по возрастанию.",
        "en": "Numbers are not in ascending order after sort.",
    },
    "v07": {
        "ru": "Имя пользователя может сломать разметку страницы.",
        "en": "A user name can break the page markup.",
    },
    "v08": {
        "ru": "После отправки формы страница внезапно перезагружается.",
        "en": "The page reloads unexpectedly after submit.",
    },
    "v09": {
        "ru": "Проверка почти равных чисел работает непредсказуемо.",
        "en": "Comparing nearly equal numbers is unpredictable.",
    },
    "v10": {
        "ru": "Счётчик таймера не растёт, хотя интервал запущен.",
        "en": "The timer counter does not grow even though the interval is running.",
    },
    "v11": {
        "ru": "Ошибки API выглядят как обычные данные.",
        "en": "API errors look like regular data.",
    },
    "v12": {
        "ru": "Исходный объект пользователя меняется сам по себе.",
        "en": "The original user object mutates on its own.",
    },
    "v13": {
        "ru": "Падает, если у пользователя нет части полей.",
        "en": "Crashes if the user is missing some fields.",
    },
    "v14": {
        "ru": "При быстром вводе обработчик срабатывает слишком часто.",
        "en": "On fast typing the handler fires too often.",
    },
    "v15": {
        "ru": "Проверка сломанного числа всегда даёт один ответ.",
        "en": "Checking a broken number always returns the same answer.",
    },
    "r01": {
        "ru": "React ругается на список в консоли.",
        "en": "React warns about a list in the console.",
    },
    "r02": {
        "ru": "После добавления элемента UI не всегда обновляется.",
        "en": "The UI does not always update after adding an item.",
    },
    "r03": {
        "ru": "Лишние запросы уходят снова и снова.",
        "en": "Extra requests keep going out again and again.",
    },
    "r04": {
        "ru": "После ухода со страницы что-то продолжает тикать.",
        "en": "Something keeps ticking after you leave the page.",
    },
    "r05": {
        "ru": "React ругается на порядок вызова хуков.",
        "en": "React complains about hook call order.",
    },
    "r06": {
        "ru": "В поле ввода нельзя напечатать текст.",
        "en": "You cannot type into the input.",
    },
    "r07": {
        "ru": "Счётчик после серии кликов показывает не то значение.",
        "en": "After a series of clicks the counter shows the wrong value.",
    },
    "r08": {
        "ru": "После фильтрации у элементов переезжает состояние.",
        "en": "After filtering, item state jumps to the wrong rows.",
    },
    "r09": {
        "ru": "Компонент уходит в бесконечные обновления.",
        "en": "The component falls into endless updates.",
    },
    "r10": {
        "ru": "Рендер падает на данных пользователя.",
        "en": "Render crashes on user data.",
    },
    "r11": {
        "ru": "Одно и то же считается двумя способами.",
        "en": "The same thing is computed in two ways.",
    },
    "r12": {
        "ru": "После быстрого ухода со страницы — warning в консоли.",
        "en": "A warning appears after leaving the page quickly.",
    },
    "r13": {
        "ru": "Заголовок карточки пустой, хотя данные передали.",
        "en": "The card title is empty even though data was passed.",
    },
    "r14": {
        "ru": "Дочерний компонент перерисовывается без нужды.",
        "en": "The child re-renders without need.",
    },
    "r15": {
        "ru": "Клик срабатывает шире, чем ожидаешь.",
        "en": "The click fires more broadly than expected.",
    },
    "q01": {
        "ru": "Vue предупреждает про список в шаблоне.",
        "en": "Vue warns about a list in the template.",
    },
    "q02": {
        "ru": "Меняется то, что снаружи считалось неизменным входом.",
        "en": "Something treated as an immutable input is being mutated.",
    },
    "q03": {
        "ru": "Присвоение значения не обновляет интерфейс.",
        "en": "Assigning a value does not update the UI.",
    },
    "q04": {
        "ru": "Vue ругается на директивы на одном элементе.",
        "en": "Vue complains about directives on the same element.",
    },
    "q05": {
        "ru": "Изменение вложенного поля не запускает обновление.",
        "en": "Changing a nested field does not trigger an update.",
    },
    "q06": {
        "ru": "Лишние побочные действия при каждом пересчёте.",
        "en": "Extra side effects run on every recompute.",
    },
    "q07": {
        "ru": "Родитель не получает ожидаемое событие.",
        "en": "The parent does not receive the expected event.",
    },
    "q08": {
        "ru": "Обращение к DOM падает при старте.",
        "en": "DOM access crashes on startup.",
    },
    "q09": {
        "ru": "Состояние корзины меняют в обход правил стора.",
        "en": "Cart state is changed bypassing store rules.",
    },
    "q10": {
        "ru": "Вложенное поле меняется, а экран молчит.",
        "en": "A nested field changes, but the screen stays still.",
    },
    "q11": {
        "ru": "Vue ругается на слишком много обновлений подряд.",
        "en": "Vue complains about too many updates in a row.",
    },
    "q12": {
        "ru": "Данные грузятся раньше, чем открылась нужная страница.",
        "en": "Data loads before the target page is open.",
    },
    "q13": {
        "ru": "Переключатель не переключается.",
        "en": "The toggle does not toggle.",
    },
    "q14": {
        "ru": "Размер элемента сразу после показа — ноль.",
        "en": "The element size is zero right after it appears.",
    },
    "q15": {
        "ru": "Инстансы неожиданно делят одни и те же данные.",
        "en": "Instances unexpectedly share the same data.",
    },
}

TITLES: dict[str, dict[str, str]] = {
    "v01": {"ru": "Off-by-one → NaN", "en": "Off-by-one → NaN"},
    "v02": {"ru": "== vs ===", "en": "== vs ==="},
    "v03": {"ru": "var + closure в цикле", "en": "var + closure in a loop"},
    "v04": {"ru": "забыли await", "en": "forgot await"},
    "v05": {"ru": "JSON.parse без try", "en": "JSON.parse without try"},
    "v06": {"ru": "Array.sort без компаратора", "en": "Array.sort without a comparator"},
    "v07": {"ru": "XSS через innerHTML", "en": "XSS via innerHTML"},
    "v08": {"ru": "нет preventDefault", "en": "missing preventDefault"},
    "v09": {"ru": "сравнение float", "en": "float comparison"},
    "v10": {"ru": "потеря this", "en": "lost this"},
    "v11": {"ru": "не проверили res.ok", "en": "did not check res.ok"},
    "v12": {"ru": "мутация аргумента", "en": "mutating an argument"},
    "v13": {"ru": "нет optional chaining", "en": "missing optional chaining"},
    "v14": {"ru": "setTimeout без clear", "en": "setTimeout without clear"},
    "v15": {"ru": "проверка NaN", "en": "NaN check"},
    "r01": {"ru": "нет key", "en": "missing key"},
    "r02": {"ru": "мутация state", "en": "mutating state"},
    "r03": {"ru": "useEffect без deps", "en": "useEffect without deps"},
    "r04": {"ru": "нет cleanup interval", "en": "missing interval cleanup"},
    "r05": {"ru": "условный hook", "en": "conditional hook"},
    "r06": {"ru": "controlled без onChange", "en": "controlled without onChange"},
    "r07": {"ru": "stale closure", "en": "stale closure"},
    "r08": {"ru": "key={index} при фильтрации", "en": "key={index} while filtering"},
    "r09": {"ru": "бесконечный useEffect", "en": "infinite useEffect"},
    "r10": {"ru": "рендер объекта", "en": "rendering an object"},
    "r11": {"ru": "derived state лишний", "en": "redundant derived state"},
    "r12": {"ru": "setState после unmount", "en": "setState after unmount"},
    "r13": {"ru": "неверный prop", "en": "wrong prop"},
    "r14": {"ru": "новый объект каждый рендер", "en": "new object every render"},
    "r15": {"ru": "событие на неправильном элементе", "en": "event on the wrong element"},
    "q01": {"ru": "v-for без :key", "en": "v-for without :key"},
    "q02": {"ru": "мутация prop", "en": "mutating a prop"},
    "q03": {"ru": "потеря реактивности", "en": "lost reactivity"},
    "q04": {"ru": "v-if + v-for на одном узле", "en": "v-if + v-for on the same node"},
    "q05": {"ru": "watch без deep", "en": "watch without deep"},
    "q06": {"ru": "side effect в computed", "en": "side effect in computed"},
    "q07": {"ru": "неверное имя emit", "en": "wrong emit name"},
    "q08": {"ru": "template ref на mount", "en": "template ref on mount"},
    "q09": {"ru": "мутация store снаружи", "en": "mutating the store from outside"},
    "q10": {"ru": "shallowRef и вложенность", "en": "shallowRef and nesting"},
    "q11": {"ru": "бесконечный watchEffect", "en": "infinite watchEffect"},
    "q12": {"ru": "навигация без await", "en": "navigation without await"},
    "q13": {"ru": "ref в script без .value", "en": "ref in script without .value"},
    "q14": {"ru": "DOM до обновления", "en": "DOM before update"},
    "q15": {"ru": "mutable default prop", "en": "mutable default prop"},
}


def get_challenge(framework: str, challenge_id: str) -> dict[str, Any] | None:
    for ch in CHALLENGES.get(framework, []):
        if ch["id"] == challenge_id:
            return ch
    return None


def public_challenge(ch: dict[str, Any], lang: str = "ru") -> dict[str, Any]:
    """Public payload without spoilers (no bug_line / correct flags)."""
    from showcaselab.locale import loc

    hint = HINTS.get(ch["id"], ch.get("hint", ""))
    title = TITLES.get(ch["id"], ch.get("title", ""))
    return {
        "id": ch["id"],
        "file": ch["file"],
        "title": loc(title, lang),  # type: ignore[arg-type]
        "hint": loc(hint, lang),  # type: ignore[arg-type]
        "lines": ch["lines"],
        "fixes": [{"id": f["id"], "code": f["code"]} for f in ch["fixes"]],
    }


def check_bug_line(framework: str, challenge_id: str, line: int) -> bool | None:
    """Return True/False, or None if challenge not found."""
    ch = get_challenge(framework, challenge_id)
    if ch is None:
        return None
    return line == ch["bug_line"]


def check_bug_fix(framework: str, challenge_id: str, fix_id: str) -> bool | None:
    """Return True/False, or None if challenge/fix not found."""
    ch = get_challenge(framework, challenge_id)
    if ch is None:
        return None
    for fix in ch["fixes"]:
        if fix["id"] == fix_id:
            return bool(fix["correct"])
    return None
