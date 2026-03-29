const sideLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/planteldeduvidas/",
    imageSrc: "/images/insta.png",
    size: {width: "50px", height: "50px"},
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.gg/dbKeAz6Y",
    imageSrc: "/images/discord.png",
    size: {width: "50px", height: "45px"},
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@PlanteldeDuvidas",
    imageSrc: "/images/youtube.png",
    size: {width: "55px", height: "55px"},
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/plantelduvidas",
    imageSrc: "/images/telegram.png",
    size: {width: "35px", height: "35px"},
  },
];

export default function SideNavbar() {
  return (
    <nav className="navbar">
      <ul>
        {sideLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img src={link.imageSrc} alt={link.label}
              style={{width: link.size.width, height: link.size.height}}
              />
              {/*
                Como colocar o ícone:
                1) public/images/
                2) src="/images/NOME_DA_IMAGEM.png"
              */}
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
