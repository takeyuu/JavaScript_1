$(function() {
  // 合計点と平均値の取得
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                        ];
    let number = subject_points.length;
    let sum = 0;
    // 合計点の計算
    // ーーー追加課題１ここからーーーーーーーーーーーーー
    for(let i = 0; i < number; i++) {
      sum += subject_points[i];
    }
    // ーーーここまでーーーーーーーーーーーーーーーーーー
    // 平均値の計算
    let average = sum / number;
    $('#sum_indicate').text(sum);
    $('#average_indicate').text(average);
  };
  // ランク分け
  function get_achievement() {
    let averageIndicate = $('#average_indicate').text();
    if (averageIndicate >= 80) {
      return 'A';
    } else if (averageIndicate >= 60) {
        return 'B';
    } else if (averageIndicate >= 40) {
        return 'C';
    } else {
        return 'D';
    }
  };
  // 判定
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                         ];
    let number = subject_points.length;
    let judge = "合格";
    for ( let i = 0; i < number; i++) {
      if (subject_points[i] < 60) {
        judge = "不合格";
        break;
      }
    }
    return judge;
  };
  // 最終ジャッジ
  function judgement() {
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    // ーーー追加課題２のコードここからーーーーーーーーーーーー
    if ($('#alert-indicate')){
      $('#alert-indicate').remove();
    }
    // ーーーここまでーーーーーーーーーーーーーーーーーーーーー
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };
  // 点数が入力変更されたとき実行
  $('.container').find('input').change(function() {
    score_indicate();
  });
  // ランクボタンを押した時実行
  $('#btn-evaluation').click(function() {
    $('#evaluation').text(get_achievement());
  });
  // 判定ボタンを押した時実行
  $('#btn-judge').click(function() {
    $('#judge').text(get_pass_or_failure());
  });
  // 最終ジャッジボタンを押した時実行
  $('#btn-declaration').click(function() {

    $('#declaration').text(judgement());
  });
});
