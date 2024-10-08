interface Props {
  text: string;
  as?: keyof JSX.IntrinsicElements; // Permite pasar el tipo de elemento
}

const PageHeader = ({ text, as: Component = 'h2' }: Props) => { // Cambia 'h2' a otro por defecto si lo prefieres
  console.log("Rendering PageHeader with text:", text);
  return (
    <Component style={{ color: 'black' }} className="text-5xl font-extrabold dark:text-white text-center">
      {text}
    </Component>
  );
}

export default PageHeader;
