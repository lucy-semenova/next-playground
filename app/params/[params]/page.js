
export default function Params() {
  params, searchParams }) {
 
    const paramsid = (await params).postid;
    const search = (await searchParams).search;
  console.log(params)
 
    return <h1>Hello Post Id {paramsid}{search}</h1>
    
}