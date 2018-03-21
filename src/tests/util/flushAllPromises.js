/* Async function that will finish execution after all promises have been finished
 * Usage:
 *   it('...', async () =. {
 *     // mount component
 *     // execute actions
 *     await flushAllPromises();
 *     // execute assertions for async actions
 *   });
 */
export default function flushAllPromises() {
  return new Promise(resolve => setImmediate(resolve));
}
