/* Phys10 Bilingual — nạp dữ liệu. Mỗi tệp data/chN.js gọi P10.addChapter({...}). */
window.P10 = window.P10 || { chapters: [] };
P10.addChapter = function (d) {
  P10.chapters.push({ n: d.chapter.n, chapter: d.chapter, lessons: d.lessons || [], terms: d.terms || [], quiz: d.quiz || null });
};
