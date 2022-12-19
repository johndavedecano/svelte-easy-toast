![My Image](https://raw.github.com/johndavedecano/svelte-easy-toast/main/preview.png)

## Installation

```bash
npm i svelte-easy-toast
```

```
<script>
     import { SvelteEasyToast, toast } from 'svelte-easy-toast';
     
     const showToast = () => {
	    toast({
		type: 'primary', // dark, danger, success, info, warning, default, error
		position: 'top-right', // top-left, top-center, bottom-left, bottom-right, bottom-center
		text: 'If you're seeing this, you've probably already done this step. Congrats!',
		title: 'Svelte is too awesome!',
	    });
     }
</script>

<button on:click={showToast}>show Toast</button>

<SvelteEasyToast />
```


## MIT License
Copyright (c) 2022 J.D Decano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
