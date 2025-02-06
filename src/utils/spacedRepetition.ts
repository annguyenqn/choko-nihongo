export function calculateNextReview(
    interval: number,
    easeFactor: number,
    repetitions: number,
    correct: boolean
  ) {
    if (correct) {
      // Nếu trả lời đúng, tăng số lần ôn tập và tính lại interval
      interval = Math.floor(interval * easeFactor);  // Làm tròn interval
      repetitions++;
    } else {
      // Nếu trả lời sai, giảm số lần ôn tập và giảm interval
      repetitions = Math.max(1, repetitions - 1);  // Không giảm dưới 1
    }
  
    // Tính lại easeFactor dựa trên kết quả trả lời
    easeFactor = easeFactor + (0.1 - (5 - easeFactor) * (0.08 + (5 - easeFactor) * 0.02));
  
    // Cập nhật review_date (ngày ôn lại tiếp theo)
    const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;  // interval tính theo ngày
  
    // Memory score có thể được điều chỉnh từ mức độ ôn tập và mức độ nhớ của người dùng
    const memoryScore = repetitions;
  
    return { interval, easeFactor, repetitions, memoryScore, reviewDate: nextReview };
  }
  