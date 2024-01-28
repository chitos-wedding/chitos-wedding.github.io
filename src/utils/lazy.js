import { h, defineAsyncComponent, defineComponent, ref, onMounted } from 'vue'

export const lazyLoadComponentIfVisible = ({
  componentLoader,
  loadingComponent,
  errorComponent,
  delay,
  timeout,
}) => {
  let resolveComponent

  return defineAsyncComponent({
    // the loader function
    loader: () => {
      return new Promise((resolve) => {
        // We assign the resolve function to a variable
        // that we can call later inside the loadingComponent
        // when the component becomes visible
        resolveComponent = resolve
      })
    },
    // A component to use while the async component is loading
    loadingComponent: defineComponent({
      setup() {
        // We create a ref to the root element of
        // the loading component
        const elRef = ref()

        async function loadComponent() {
          // `resolveComponent()` receives the
          // the result of the dynamic `import()`
          // that is returned from `componentLoader()`
          const component = await componentLoader()
          resolveComponent(component)
        }

        onMounted(async () => {
          // We immediately load the component if
          // IntersectionObserver is not supported
          if (!('IntersectionObserver' in window)) {
            await loadComponent()
            return
          }

          const observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) return

            // We cleanup the observer when the
            // component is not visible anymore
            observer.unobserve(elRef.value)
            loadComponent()
          })

          // We observe the root of the
          // mounted loading component to detect
          // when it becomes visible
          observer.observe(elRef.value)
        })

        return () => {
          return h('div', { ref: elRef }, loadingComponent)
        }
      },
    }),
    // Delay before showing the loading component. Default: 200ms.
    delay,
    // A component to use if the load fails
    errorComponent,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout,
  })
}
