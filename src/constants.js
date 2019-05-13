export const sortFilteringStringItems = (key, order = "asc") => {
    return function(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        if (
            a[key] === "" ||
            typeof a[key] === "object" ||
            b[key] === "" ||
            typeof b[key] === "object"
        ) {
            return 0;
        }
        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        comparison = varA.localeCompare(varB);

        return order === "desc" ? comparison * -1 : comparison;
    };
};

export const APIKeysObj = {
    genderMale: "Male",
    genderFemale: "Female",
    genderUnknown: "unknown"
};

export const Pagination = (
    total,
    currentPage = "1",
    className = "pagination-item"
) => {
    let paginationText = "";
    if (total > 1) {
        let totalPages = total;
        let endPage = total;
        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                if (i === +currentPage) {
                    paginationText +=
                        "<a class='currentPage'>" + currentPage + "</a>";
                } else {
                    paginationText +=
                        "<a class='" +
                        className +
                        "' data-page='" +
                        i +
                        "'>" +
                        i +
                        "</a>";
                }
            }
        } else {
            if (currentPage > 2 && currentPage <= totalPages - 2) {
                paginationText =
                    "<a class='" +
                    className +
                    "' data-page='" +
                    1 +
                    "'>" +
                    1 +
                    "</a><span>...</span><a class='" +
                    className +
                    "'  data-page='" +
                    (currentPage - 1) +
                    "'>" +
                    (currentPage - 1) +
                    "</a><a class='currentPage'>" +
                    currentPage +
                    "</a><a class='" +
                    className +
                    "'   data-page='" +
                    (+currentPage + 1) +
                    "'>" +
                    (+currentPage + 1) +
                    "</a><span>...</span><a class='" +
                    className +
                    "'  data-page='" +
                    endPage +
                    "'>" +
                    endPage +
                    "</a>";
            } else if (currentPage <= 2) {
                for (let i = 1; i < 4; i++) {
                    if (i === +currentPage) {
                        paginationText +=
                            "<a class='currentPage'>" + currentPage + "</a>";
                    } else {
                        paginationText +=
                            "<a class='" +
                            className +
                            "'  data-page='" +
                            i +
                            "'>" +
                            i +
                            "</a>";
                    }
                }
                paginationText +=
                    "<span>...</span><a class='" +
                    className +
                    "'  data-page='" +
                    endPage +
                    "'>" +
                    endPage +
                    "</a>";
            } else if (currentPage > totalPages - 2) {
                for (let i = totalPages; i > totalPages - 3; i--) {
                    if (i === +currentPage) {
                        paginationText =
                            "<a class='currentPage'>" +
                            currentPage +
                            "</a>" +
                            paginationText;
                    } else {
                        paginationText =
                            "<a class='" +
                            className +
                            "'  data-page='" +
                            i +
                            "'>" +
                            i +
                            "</a>" +
                            paginationText;
                    }
                }
                paginationText =
                    "<a class='" +
                    className +
                    "'  data-page='1'>" +
                    1 +
                    "</a><span>...</span>" +
                    paginationText;
            }
        }
        paginationText = "<div class='pagination'>" + paginationText + "</div>";
    }

    return paginationText;
};

export const CHARACTERSCOUNT = 20;
