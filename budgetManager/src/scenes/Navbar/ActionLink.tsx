export default function ActionLink(props: { name: string; to: string }) {
  return (
    <a href={props.to} className="text-white text-xl hover:text-black hover:text-2xl">
      {props.name}
    </a>
  );
}
