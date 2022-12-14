import { deleteAsync } from 'del';
export const reset = async () => {
    const deletedFiles = await deleteAsync(app.path.clean);
    return deletedFiles;
};
