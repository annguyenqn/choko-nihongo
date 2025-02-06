export function calculateNextReview(
    interval: number,
    easeFactor: number,
    repetitions: number,
    correct: string // nhận giá trị "remembered", "somewhat remembered", "forgotten"
  ) {
    if (correct === "remembered") {
      interval = Math.floor(interval * easeFactor);  // Làm tròn interval
      repetitions++;
    } else if (correct === "somewhat remembered") {
      interval = Math.floor(interval * 1.5);  // Tăng ít hơn so với trường hợp nhớ rõ
    } else {
      repetitions = Math.max(1, repetitions - 1);  // Không giảm dưới 1
      interval = Math.floor(interval * 0.5);  // Giảm thời gian ôn tập
    }
  
    // Tính lại easeFactor với một giới hạn hợp lý (2.5 - 2.9)
    easeFactor = easeFactor + (0.1 - (5 - easeFactor) * (0.08 + (5 - easeFactor) * 0.02));
    easeFactor = Math.max(2.5, Math.min(easeFactor, 2.9));  // Giới hạn easeFactor trong khoảng từ 2.5 đến 2.9
  
    const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;  // interval tính theo ngày
  
    const memoryScore = repetitions;
  
    return { interval, easeFactor, repetitions, memoryScore, reviewDate: nextReview };
  }
  