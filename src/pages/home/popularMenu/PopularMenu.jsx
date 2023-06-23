import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItemCard from "../../shared/menuItem/MenuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <section>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      </section>
      <div className="grid md:grid-cols-12 gap-4 justify-between my-10">
        {popular.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
