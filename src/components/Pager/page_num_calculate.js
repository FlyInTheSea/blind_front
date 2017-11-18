export const get_prev_page_url = (cur_page) => {

    const prev = {
        active: true,
    }
    let prev_num = cur_page - 1;
    if (prev_num === 0) {
        prev.active = false
    }
    prev.link = get_format_url(prev_num)

    return prev

}

export const get_next_page_url = (cur_page, total_page) => {
    const next = {
        active: true,
    }
    let next_num = cur_page + 1;
    if (next_num > total_page) {
        next.active = false
    }
    next.link = get_format_url(next_num)
    return next

}

export const get_format_url = (page_num) => {
    return "/daily_report/index/pages/" + page_num
}

export const get_urls_nums = (cur_page, total_page) => {
    //显示页码数只允许奇数
    let page_total_num = 5
    let begin_num = -(page_total_num - 1 ) / 2 + cur_page
    let end_num = (page_total_num - 1 ) / 2 + cur_page
    if (end_num > total_page) {
        end_num = total_page
    }
    if (begin_num < 1) {
        begin_num = 1
    }

    let nums = [];
    for (let i = begin_num; i <= end_num; ++i) {

        nums.push(i);
    }
    return nums

}


export const get_urls = (cur_page, urls_num) =>
    urls_num.map(
        item => {
            return {
                cur: cur_page === item,
                link: get_format_url(item),
                num: item
            }
        }
    )
