import { LIST_ITEMS } from "./List_Items"

export const MenuDrawerItems = () => {
    return (
        <div className="menu-drawer-items row">
            {
                LIST_ITEMS.map((item) => {
                    return (
                        <div className="col-md-4 text-light " key={item.id}>
                            <div className="title-container d-flex justify-content-start align-items-center">
                                {item.logo}
                                <span className="fw-bold fs-4 ms-2">{item.title}</span>
                            </div>
                            <ul className="list-unstyled ps-3">
                                {item.links.map((sub) => <li key={sub.link} className="my-2">{sub.link}</li>)}
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )
}