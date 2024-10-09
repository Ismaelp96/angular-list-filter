import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IfilterOptions } from '../interfaces/filter-options.interface';

const filterUsersList = (
  filterOptions: IfilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};

const filterUsersListByDate = (
  startDate: Date | null,
  endDate: Date | null,
  usersList: IUser[]
): IUser[] => {
  const DATES_NOT_SELECTED = startDate === null || endDate === null;

  if (DATES_NOT_SELECTED) {
    return usersList;
  }
  const checkDateInterval = (user: IUser) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });

  const listFiltered = usersList.filter(checkDateInterval);

  return listFiltered;
};

const filterUsersListByStatus = (
  status: boolean | null,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === null;
  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status);

  return filteredList;
};

const filterUsersListByName = (
  name: string | null,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === null;
  if (NAME_NOT_TYPPED) {
    return usersList;
  }
  const filteredLIst = usersList.filter((user) =>
    user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return filteredLIst;
};

export { filterUsersList };
