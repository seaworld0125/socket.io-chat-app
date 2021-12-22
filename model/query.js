module.exports = {
    CHECK_USERNAME : 'SELECT account_name FROM account WHERE account_name = ?',
    CHECK_NICKNAME : 'SELECT nickname FROM account WHERE nickname = ?',
    CHECK_ACCOUNT : 'SELECT * FROM account WHERE account_name = ?',
    CHECK_IP : 'SELECT account_name FROM account WHERE ip_address = ?',
    CHECK_BAN_LIST : 'SELECT ip FROM ban_list WHERE ip = ?',
    
    GET_BOARD_LIST : "SELECT * FROM board WHERE if_delete = 'N'",
    GET_ARTICLE_INFO : 'SELECT content.id, title, author, view, hits, date, time, content FROM board INNER JOIN content ON board.id = content.id WHERE board.id = ?',
    GET_COMMENT : "SELECT * FROM comment WHERE article_id = ? AND if_delete = 'N'",
    GET_REPLY : "SELECT * FROM reply WHERE article_id = ? AND if_delete = 'N'",
    
    NEW_ARTICLE : 'INSERT INTO board VALUE(?, ?, ?, ?, ?, ?, ?, ?, ?)',
    NEW_CONTENT : 'INSERT INTO content VALUE(?, ?)',
    NEW_COMMENT : "INSERT INTO comment VALUE(0, ?, ?, ?, 'N')",
    NEW_REPLY : "insert into reply value(0, ?, ?, ?, ?, 'N')",
    
    CREATE_ACCOUNT : 'INSERT INTO account VALUE(?, ?, ?, ?, ?, ?, ?, 1, 0)',
    
    UPDATE_VIEW : 'UPDATE board SET view = view + 1 WHERE id = ?',
    UPDATE_COMMENT : "UPDATE comment SET comment = ? WHERE id = ?",
    
    DELETE_ARTICLE : "UPDATE board SET if_delete = 'Y' WHERE id = ?", 
    DELETE_COMMENT : "UPDATE comment SET if_delete = 'Y' WHERE id = ?",
    DELETE_REPLY : "UPDATE reply SET if_delete = 'Y' WHERE id = ?",
    
    SET_NICKNAME : 'UPDATE account SET nickname=? WHERE nickname=?',
};