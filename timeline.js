let timelineItems = $('.timeline ul li div');

timelineItems.each((index, item) => {
 animateContent(index);
});

function animateContent(index) {
 setTimeout(() => {
    let content = timelineItems.eq(index);
    content.css('transform', 'translateY(0px)');
    content.css('opacity', '1');
 }, index * 1000);
}