# Getting Started with React Advance - `useRef`

CRUD functionality is implemented by `useRef`:

+ C - Create
+ R - Read
+ U - Update
+ D - Delete

## Esacape Hatches:
=> hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features.

### Memoization
=> `useCallback` , `useMemo` and memo() through these memoized the code base to not render a component for everytime.

## forwardRef & useImperativeHandle
=> use reference from parent (here App component ) to child component (AddVideo component)

useImperativeHandle is used when it need to limit some access or rename the default DOM api function

## useLayoutEffect
=> version of `useEffect`. it fires before browser repaint screen. but pitfall is that `useLayoutEffect` can hurt performance.

it is used for measurement of layout (height, width etc.) or design purpose before rendering the components.

## useDebugValue
=> debugging for react component  09:11 

keep updating ...
