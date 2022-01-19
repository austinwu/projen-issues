# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### Hello <a name="Hello" id="projen-issues.Hello"></a>

#### Initializers <a name="Initializers" id="projen-issues.Hello.Initializer"></a>

```typescript
import { Hello } from 'projen-issues'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-issues.Hello.sayGoodbye">sayGoodbye</a></code> | *No description.* |
| <code><a href="#projen-issues.Hello.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayGoodbye` <a name="sayGoodbye" id="projen-issues.Hello.sayGoodbye"></a>

```typescript
public sayGoodbye()
```

##### `sayHello` <a name="sayHello" id="projen-issues.Hello.sayHello"></a>

```typescript
public sayHello(name?: string)
```

###### `name`<sup>Optional</sup> <a name="name" id="projen-issues.Hello.sayHello.parameter.name"></a>

- *Type:* string

---




### Kitchen <a name="Kitchen" id="projen-issues.Kitchen"></a>

#### Initializers <a name="Initializers" id="projen-issues.Kitchen.Initializer"></a>

```typescript
import { Kitchen } from 'projen-issues'

new Kitchen()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-issues.Kitchen.assembleSandwich">assembleSandwich</a></code> | *No description.* |
| <code><a href="#projen-issues.Kitchen.bakeBread">bakeBread</a></code> | *No description.* |

---

##### `assembleSandwich` <a name="assembleSandwich" id="projen-issues.Kitchen.assembleSandwich"></a>

```typescript
public assembleSandwich(ingredients: string[])
```

###### `ingredients`<sup>Required</sup> <a name="ingredients" id="projen-issues.Kitchen.assembleSandwich.parameter.ingredients"></a>

- *Type:* string[]

---

##### `bakeBread` <a name="bakeBread" id="projen-issues.Kitchen.bakeBread"></a>

```typescript
public bakeBread(dough: string)
```

###### `dough`<sup>Required</sup> <a name="dough" id="projen-issues.Kitchen.bakeBread.parameter.dough"></a>

- *Type:* string

---




### Sandwich <a name="Sandwich" id="projen-issues.Sandwich"></a>

#### Initializers <a name="Initializers" id="projen-issues.Sandwich.Initializer"></a>

```typescript
import { Sandwich } from 'projen-issues'

new Sandwich(bread: string, ingredients: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-issues.Sandwich.Initializer.parameter.bread">bread</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-issues.Sandwich.Initializer.parameter.ingredients">ingredients</a></code> | <code>string[]</code> | *No description.* |

---

##### `bread`<sup>Required</sup> <a name="bread" id="projen-issues.Sandwich.Initializer.parameter.bread"></a>

- *Type:* string

---

##### `ingredients`<sup>Required</sup> <a name="ingredients" id="projen-issues.Sandwich.Initializer.parameter.ingredients"></a>

- *Type:* string[]

---






