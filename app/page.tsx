/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return [3,1,2,4].toSorted().toSpliced(1, 2).toReversed().map(x => <div key={x}>{x}</div>)
}
