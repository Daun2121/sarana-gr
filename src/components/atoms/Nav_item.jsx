const Nav_item = ({to, name, setMMO}) => {
    return (
        <li>
            <a
                href={to}
                onClick={() => setMMO(to)}
                className="text-white hover:text-[#00B4D8] transition"
            >
                {name}
            </a>
        </li>
    );
};

export default Nav_item;
